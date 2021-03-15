const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const pAll = require("p-all");

const analyze = require("./analyze");

const getUrls = () =>
  fs
    .readFileSync(path.join(__dirname, "..", "urls.txt"))
    .toString()
    .split("\n")
    .filter(Boolean);

const scan = () =>
  puppeteer.launch().then(async (browser) => {
    const hosts = getUrls();
    const results = await pAll(
      hosts.map((url) => async () => {
        console.warn(`Fetching ${url}`);
        return {
          url,
          ...(await analyze(browser, url)),
        };
      }),
      { concurrency: 2, stopOnError: false }
    );
    browser.close();
    return results;
  });

if (require.main === module) {
  scan().then((results) => {
    console.log(JSON.stringify(results, null, 2));
  });
}

module.exports = scan;
