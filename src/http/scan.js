const fs = require("fs");
const path = require("path");
const pAll = require("p-all");
const fetch = require("node-fetch");

const getUrls = () =>
  fs
    .readFileSync(path.join(__dirname, "..", "..", "urls.txt"))
    .toString()
    .split("\n")
    .map((url) => url.replace(/^https?:\/\//, "".replace(/\/$/, ""))) // make hostnames
    .filter(Boolean);

const scan = () => {
  const urls = getUrls();
  return pAll(
    urls.map((url) => async () => ({
      url,
      result: await scanHTTP(url),
    })),
    { concurrency: 1 }
  );
};

const INTERVAL = 10000;
const MAX_TRIES = 10;

const API_HTTP = `https://http-observatory.security.mozilla.org/api/v1`;

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
            url,
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
