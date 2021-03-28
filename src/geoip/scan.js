const dns = require("dns");
const geolite2 = require("geolite2-redist");
const maxmind = require("maxmind");
const pAll = require("p-all");
const { default: scan } = require("../http/scan");

const { toHostname } = require("../utils");



/**
 * Run a hostname to IP lookup
 *
 * @param {string} url The full URL
 *
 * @returns {Promise<DnsScanResults>}
 */
const dnsLookup = (url) =>
  new Promise((resolve, reject) => {
    dns.lookup(url, (err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });
  });

/**
 * uniquify some array
 *
 * @param {any[]} input array
 *
 * @returns {any[]} output array
 */
const uniqify = (arr) => Array.from(new Set(arr));

/**
 * uniquify some array
 *
 * @param {string[]} list of hostnames
 *
 * @returns {any[]} output array
 */
const getGeoIPinfo = async (hostnames) => {
  await geolite2.downloadDbs();
  const lookup = await geolite2.open("GeoLite2-City", (path) =>
    maxmind.open(path)
  );

  return pAll(
    hostnames.map( (hostname) => async () => {
      try {
        const ip = await dnsLookup(hostname);
        return {
          hostname,
          ip,
        };
      } catch (e) {
        return { hostname, ip: null };
      }
    }), {concurrency:1}
  )
    .then((hosts) =>
      pAll(
        hosts.map(({ hostname, ip }) => async () => {
          console.error("hostname", hostname, ip);
          if (!ip) {
            return {
              hostname,
              ip,
              geoip: {},
            };
          }
          try {
            const geoip = await lookup.get(ip);
            return {
              hostname,
              ip,
              geoip,
            };
          } catch (e) {
            return {
              hostname,
              ip,
              geoip: {},
            };
          }
        }),
        { concurrency: 2, stopOnError: false }
      )
    )
    .then((result) => {
      lookup.close();
      return result;
    })
    .catch((e) => {
      lookup.close();
      throw e;
    });
};

const scanFromTrackers = (trackersData) =>
  pAll(
    trackersData.map(({ url, trackers }) => async () => {
      // extract all hostnames requests on a given url
      const hostnames = uniqify([
        toHostname(url),
        ...trackers.map((t) => t.value).map(toHostname),
      ]);
      return {
        url,
        result: await getGeoIPinfo(hostnames),
      };
    }),
    { concurrency: 1, stopOnError: false }
  );


if (require.main === module) {
  const url = process.argv[process.argv.length - 1];
  scan(url)
    .then((results) => {
      console.log(JSON.stringify(results, null, 2));
    })
    .catch(console.log);
}

module.exports = scan;

