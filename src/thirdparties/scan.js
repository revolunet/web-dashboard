const dns = require("dns");
const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const pAll = require("p-all");

const { analyzeUrl } = require("./analyze");
const { toHostname, uniqify } = require("../utils");
const { getGeoIP } = require("./geoip");

/**
 * Run a hostname to IP lookup
 *
 * @param {string} url The full URL
 *
 * @returns {Promise<DnsScanResult>}
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
 * Run a third-parties lookup on some URL with puppeteer
 *
 * @param {string} url The full URL
 *
 * @returns {Promise<ThirdPartiesScanResult>}
 */
const scan = (url) =>
  puppeteer
    .launch({
      ignoreHTTPSErrors: true,
    })
    .then((browser) =>
      analyzeUrl(browser, url)
        .then((result) => {
          browser.close();
          return result;
        })
        .catch((e) => {
          browser.close();
          throw e;
        })
    )
    .then(async (results) => {
      if (!results.trackers) {
        return results;
      }
      const hostnames = uniqify([
        toHostname(url),
        ...results.trackers.map((tracker) => toHostname(tracker.url)),
      ]);

      const endpoints = await pAll(
        hostnames.map((hostname) => async () => {
          const ip = await dnsLookup(hostname);
          return {
            hostname,
            ip,
            // add geolite2 data
            geoip: await getGeoIP(ip),
            // todo: add ipservers list
          };
        }),
        { concurrency: 1 }
      );

      return {
        ...results,
        endpoints,
      };
    })
    .catch((e) => {
      console.log("e", e);
      return {
        trackers: null,
        cookies: null,
        headers: null,
        endpoints: null,
      };
    });

if (require.main === module) {
  const url = process.argv[process.argv.length - 1];
  scan(url)
    .then((results) => {
      console.log(JSON.stringify(results, null, 2));
    })
    .catch(console.log);
}

module.exports = scan;
