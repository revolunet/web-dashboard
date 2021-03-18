const dns = require("dns");
const geolite2 = require("geolite2-redist");
const maxmind = require("maxmind");
const pAll = require("p-all");

const { toHostname } = require("../utils");

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

const uniqify = (arr) => Array.from(new Set(arr));

const getDNSinfo = async (hostnames) => {
  await geolite2.downloadDbs();
  const lookup = await geolite2.open("GeoLite2-City", (path) =>
    maxmind.open(path)
  );

  return Promise.all(
    hostnames.map(async (hostname) => ({
      hostname,
      ip: await dnsLookup(hostname),
    }))
  )
    .then((hosts) =>
      Promise.all(
        hosts.map(async ({ hostname, ip }) => ({
          hostname,
          ip,
          geoip: await lookup.get(ip),
        }))
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
        result: await getDNSinfo(hostnames),
      };
    }),
    { concurrency: 1 }
  );

if (require.main === module) {
  scanFromTrackers(require(process.argv[process.argv.length - 1]))
    .then((results) => {
      console.log(JSON.stringify(results, null, 2));
    })
    .catch(console.log);
}
