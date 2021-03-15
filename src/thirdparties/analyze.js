const trackers = require("./trackers");

// in seconds
const TIMEOUT = 120;

const hostname = (url) =>
  url.replace(/^(?:https?:\/\/)?(?:www\d*\.)?([^/]+)\/?.*/i, "$1");

const isTracker = (requestUrl) => {
  const match = trackers.find((tracker) => tracker.check(requestUrl));
  if (match) {
    return { type: match.id, value: requestUrl };
  }
  return { type: "unknown", value: requestUrl };
};

const isGouvFr = (url) =>
  hostname(url).match(/\.gouv\.fr/i) ||
  hostname(url).match(/gouvernement\.fr/i);

const isLegit = (url) =>
  url.match(/\.aphp\.fr/i) ||
  url.match(/\.cci\.fr/i) ||
  url.match(/\.openstreetmap\.org/i) ||
  url.match(/\.ameli\.fr/i) ||
  url.match(/\.sante\.fr/i) ||
  url.match(/\.caf\.fr/i) ||
  url.match(/\.cnrs\.fr/i);

const isSameHost = (url1, url2) => hostname(url1) === hostname(url2);

const wait = (duration = 5000) =>
  new Promise((resolve) => setTimeout(resolve, duration));

// return {headers, cookies, trackers} for a given url
const analyseUrl = async (browser, url) => {
  const realUrl = url.startsWith("http") ? url : `http://${url}`;

  const page = await browser.newPage();
  await page.setRequestInterception(true);
  const trackers = [];
  page.on("request", (interceptedRequest) => {
    const requestUrl = interceptedRequest.url();
    if (
      !requestUrl.match(/^data:/) &&
      !isSameHost(url, requestUrl) &&
      !isGouvFr(requestUrl) &&
      !isLegit(requestUrl)
    ) {
      const res = isTracker(requestUrl);
      if (res) {
        trackers.push(res);
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
    // if url fail try again with www prefix
    if (!realUrl.match(/https?:\/\/www\./)) {
      return analyseUrl(browser, `http://www.${url}`);
    }
  }
  return {
    trackers: null,
    cookies: null,
    headers: null,
  };
};

module.exports = analyseUrl;
