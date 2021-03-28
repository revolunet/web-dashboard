const geolite2 = require("geolite2-redist");
const maxmind = require("maxmind");

/**
 * get geolite2 city info
 *
 * @param {string} ip some IP address
 *
 * @returns {Promise<GeoIpResult>} geolite2 data
 */
const getGeoIP = async (ip) => {
  await geolite2.downloadDbs();
  const lookup = await geolite2.open("GeoLite2-City", (path) =>
    maxmind.open(path)
  );

  try {
    const geoip = await lookup.get(ip);
    lookup.close();
    return geoip;
  } catch (e) {
    lookup.close();
    return null;
  }
};

module.exports = { getGeoIP };
