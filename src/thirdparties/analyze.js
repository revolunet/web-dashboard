const trackers = require("./trackers");
const { toHostname } = require("../utils");

// expected response timeout in seconds
const TIMEOUT = 120;

/**
 * check if some url is known
 *
 * @param {string} url The full URL
 *
 * @returns {ThirdParty|undefined}
 */
const getKnownThirdParty = (url) =>
  trackers.find((tracker) => tracker.check(url));

const legitDomains = [
  ".aphp.fr",
  ".cci.fr",
  ".openstreetmap.org",
  ".ameli.fr",
  ".sante.fr",
  ".caf.fr",
  ".cnrs.fr",
  ".gouv.fr",
  ".gouvernement.fr",
].map((d) => new RegExp(d, "i"));

/**
 * check if some url is legit
 *
 * @param {string} url The full URL
 *
 * @returns {boolean}
 */
const isLegit = (url) => {
  const hostname = toHostname(url);
  if (hostname) {
    return legitDomains.filter((domain) => hostname.match(domain)).length > 0;
  }
  return false;
};

/**
 * get root domain of some url
 *
 * @param {string} url The full URL
 *
 * @returns {string} root domain name
 */
const rootDomain = (url) =>
  url
    .replace(/(?:https?:\/\/)?(?:[^/])*?([^./]+\.[^./]+)(?:\/.*)?$/i, "$1")
    .toLowerCase();

/**
 * check if some urls share the same domain
 *
 * @param {string} url1 The full URL
 * @param {string} url2 The full URL
 *
 * @returns {boolean}
 */
const belongsToSameDomain = (url1, url2) =>
  rootDomain(url1) === rootDomain(url2);

/**
 * wait a while
 *
 * @param {number} [duration] how long to wait in ms
 *
 * @returns {Promise<void>}
 */
const wait = (duration = 5000) =>
  new Promise((resolve) => setTimeout(resolve, duration));

/**
 * analyse a given url with puppeteer
 *
 * @param {number} browser puppeteer instance
 * @param {string} url the full URL
 *
 * @returns {Promise<ThirdPartiesScanResult>}
 */
const analyzeUrl = async (browser, url) => {
  const realUrl = url.startsWith("http") ? url : `http://${url}`;

  const page = await browser.newPage();
  await page.setRequestInterception(true);
  /** @type {ThirdPartyResult[]} */
  const trackers = [];
  // for every external request, check if considered third-party
  page.on("request", (interceptedRequest) => {
    const requestUrl = interceptedRequest.url();
    if (
      !requestUrl.match(/^data:/) &&
      !belongsToSameDomain(url, requestUrl) &&
      !isLegit(requestUrl)
    ) {
      const res = getKnownThirdParty(requestUrl);
      if (res) {
        trackers.push({ type: res.id, url: requestUrl, details: res });
      } else {
        // maybe a tracker
        trackers.push({ type: "unknown", url: requestUrl });
      }
    }
    interceptedRequest.continue();
  });
  try {
    const response = await page.goto(realUrl, {
      waitUntil: "load",
      timeout: TIMEOUT * 1000,
    });
    const headers = response.headers();
    const cookies = await page.cookies();
    await wait();
    await page.close();
    return {
      trackers,
      cookies,
      headers,
    };
  } catch (e) {
    await page.close();
    console.error("e", realUrl, e);
  }
  return {
    trackers: null,
    cookies: null,
    headers: null,
  };
};

module.exports = { rootDomain, belongsToSameDomain, analyzeUrl };
