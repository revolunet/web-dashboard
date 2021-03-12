const fs = require("fs");
const path = require("path");
const pAll = require("p-all");
const fetch = require("node-fetch");

const getUrls = () =>
  fs
    .readFileSync(path.join(__dirname, "..", "urls.txt"))
    .toString()
    .split("\n")
    .map((url) => url.replace(/^https?:\/\//, "".replace(/\/$/, ""))) // make hostnames
    .filter(Boolean);

const scan = () => {
  const urls = getUrls();
  return pAll(
    urls.map((url) => async () => ({
      url,
      tls: await scanTLS(url),
      http: await scanHTTP(url),
    })),
    { concurrency: 1 }
  );
};

const INTERVAL = 10000;
const MAX_TRIES = 10;

const API_HTTP = `https://http-observatory.security.mozilla.org/api/v1`;
const API_TLS = `https://api.ssllabs.com/api/v2`;

const scanTLS = async (url, tries = MAX_TRIES) => {
  console.warn(`fetch ssllabs API for ${url}`);
  return fetch(
    `${API_TLS}/analyze?publish=off&fromCache=on&maxAge=24&host=${url}`
  )
    .then((r) => r.json())
    .then((json) => {
      if (json.errors && json.errors.length && tries > 0) {
        console.warn(
          `delay ${url} (${MAX_TRIES - tries + 1}/${MAX_TRIES}) : ${
            json.errors[0].message
          }`
        );
        return new Promise((resolve) =>
          setTimeout(() => scanTLS(url, tries - 1).then(resolve), INTERVAL)
        );
      } else if (
        json.endpoints &&
        json.endpoints.length &&
        json.endpoints[0].progress !== 100 &&
        tries > 0
      ) {
        console.warn(
          `delay ${url} (${MAX_TRIES - tries + 1}/${MAX_TRIES}) (${
            json.endpoints[0].progress
          }%)`
        );
        return new Promise((resolve) =>
          setTimeout(() => scanTLS(url, tries - 1).then(resolve), INTERVAL)
        );
      }
      return json;
    });
};

const scanHTTP = (url, tries = MAX_TRIES) => {
  console.warn(`fetch mozilla HTTP API for ${url}`);
  return fetch(`${API_HTTP}/analyze?host=${url}&hidden=true&rescan=true`, {
    method: "POST",
  })
    .then((r) => r.json())
    .then((result) => {
      if (result.error) {
        throw new Error(result.error);
      }
      if (result.state === "FINISHED") {
        return fetch(`${API_HTTP}/getScanResults?scan=${result.scan_id}`, {
          method: "GET",
        })
          .then((r) => r.json())
          .then((details) => ({
            ...result,
            details,
          }));
      } else if (tries > 0) {
        console.warn(
          `delay HTTP ${url} (${MAX_TRIES - tries + 1}/${MAX_TRIES})`
        );
        return new Promise((resolve) =>
          setTimeout(() => scanHTTP(url, tries - 1).then(resolve), INTERVAL)
        );
      }
      throw new Error(`${MAX_TRIES} failed scans for ${url}`);
    });
};

if (require.main === module) {
  scan()
    .then((results) => {
      console.log(JSON.stringify(results, null, 2));
    })
    .catch(console.log);
}

module.exports = scan;
