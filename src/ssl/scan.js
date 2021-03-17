const fs = require("fs");
const path = require("path");
const pAll = require("p-all");
const fetch = require("node-fetch");

const getUrls = () =>
  fs
    .readFileSync(path.join(__dirname, "..", "..", "urls.txt"))
    .toString()
    .split("\n")
    .map((url) =>
      // make hostnames
      url
        .replace(/^https?:\/\//, "")
        .replace(/\/$/, "")
        .replace(/^(.*)\/.*$/, "$1")
    )
    .filter(Boolean);

const scan = () => {
  const urls = getUrls();
  return pAll(
    urls.map((url) => async () => ({
      url,
      result: await scanTLS(url),
    })),
    { concurrency: 1 }
  );
};

const INTERVAL = 10000;
const MAX_TRIES = 20;

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
            json.endpoints[0].progress > -1
              ? json.endpoints[0].progress + "%"
              : "0%"
          })`
        );
        return new Promise((resolve) =>
          setTimeout(() => scanTLS(url, tries - 1).then(resolve), INTERVAL)
        );
      } else if (json.status !== "READY" && tries > 0) {
        console.warn(`delay ${url} (${MAX_TRIES - tries + 1}/${MAX_TRIES})`);
        return new Promise((resolve) =>
          setTimeout(() => scanTLS(url, tries - 1).then(resolve), INTERVAL)
        );
      }
      return json;
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
