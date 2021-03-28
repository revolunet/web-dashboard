const fs = require("fs");
const path = require("path");
const pAll = require("p-all");
const { default: fetch } = require("node-fetch");

const { getUrls, toHostname } = require("../utils");

// this API is very slow
const INTERVAL = 30000;
const MAX_TRIES = 20;

const API_TLS = `https://api.ssllabs.com/api/v2`;

/** @typedef {Object} EndPoint
 *  @property {number} progress
 *  @property {string} serverName
 *  @property {string} statusMessage
 *  @property {string} ipAddress
 */

/**
 * Run a SSL labs scan for a given URL
 *
 * @param {string} url The full URL
 *
 * @returns {Promise<SSLScanResult>}
 */
const scan = async (url, tries = MAX_TRIES) => {
  console.warn(`fetch ssllabs API for ${url}`);
  const hostname = toHostname(url);
  const retry = () =>
    new Promise((resolve) =>
      setTimeout(() => scan(url, tries - 1).then(resolve), INTERVAL)
    );

  return fetch(
    `${API_TLS}/analyze?publish=off&fromCache=on&maxAge=24&host=${hostname}`
  )
    .then((r) => r.json())
    .then((json) => {
      if (json.errors && json.errors.length && tries > 0) {
        console.warn(
          `delay ${url} (${MAX_TRIES - tries + 1}/${MAX_TRIES}) : ${
            json.errors[0].message
          }`
        );
        return retry();
      } else if (json.status !== "READY" && tries > 0) {
        const progress =
          (json.endpoints &&
            json.endpoints.length &&
            json.endpoints
              .map(
                (/** @type {EndPoint} */ endpoint) =>
                  ` * ${endpoint.serverName} (${endpoint.ipAddress}): ${endpoint.statusMessage} :${endpoint.progress}%`
              )
              .join("\n")) ||
          "";
        console.warn(
          `delay ${url} (${MAX_TRIES - tries + 1}/${MAX_TRIES})\n${progress}`
        );
        return retry();
      }
      return json;
    });
};

if (require.main === module) {
  const url = process.argv[process.argv.length - 1];
  scan(url)
    .then((results) => {
      console.log(JSON.stringify(results, null, 2));
    })
    .catch(console.log);
}

module.exports = scan;
