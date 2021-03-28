const fs = require("fs");
const path = require("path");

/**
 * Get hostname of a given URL
 *
 * @param {string} url The full URL
 *
 * @returns {string|null}
 */
const toHostname = (url) =>
  (url &&
    // exclude relative urls
    !url.match(/^\//) &&
    url
      .replace(/^https?:\/\//, "")
      .replace(/\/$/, "")
      .replace(/^([^/]+)\/.+$/, "$1")
      .toLowerCase()) ||
  null;

/**
 * Get list of urls from a text file
 *
 *
 * @returns {string[]} a list of urls
 */
const getUrls = () =>
  fs
    .readFileSync(path.join(__dirname, "..", "urls.txt"))
    .toString()
    .split("\n")
    .filter((r) => !r.match(/^\s*#/))
    .filter(Boolean);

module.exports = { toHostname, getUrls };
