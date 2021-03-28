const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const pAll = require("p-all");

const { analyzeUrl } = require("./analyze");
const { toHostname } = require("../utils");

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
    .then((browser) => {
      return analyzeUrl(browser, url)
        .then((result) => {
          browser.close();
          return result;
        })
        .catch(() => {
          browser.close();
          return {
            trackers: null,
            cookies: null,
            headers: null,
          };
        });
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
