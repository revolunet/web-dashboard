const fs = require("fs");
const path = require("path");
const pick = require("lodash.pick");
const omit = require("lodash.omit");

const { getUrls, toHostname } = require("../utils");

const requireJson = (resultsPath, filename) => {
  try {
    return require(path.join("..", "..", resultsPath, filename));
  } catch (e) {
    console.error("e", e);
    return [];
  }
};

const smallUrl = (url) =>
  url
    .toLowerCase()
    .replace(/^https?:\/\/?/, "")
    .replace(/\/$/, "");

const isSameUrl = (url1, url2) => smallUrl(url1) === smallUrl(url2);

const isSameHost = (url1, url2) => toHostname(url1) === toHostname(url2);

const owaspCleanup = (result) => {
  return {
    ...result,
    site: result.site.map((site) => {
      return {
        ...site,
        alerts: site.alerts.map(
          ({ name, riskcode, confidence, riskdesc, desc, ...others }) => {
            return {
              name,
              riskcode,
              confidence,
              riskdesc,
              desc,
            };
          }
        ),
      };
    }),
  };
};

const exportData = async (resultsPath) => {
  // aggregate results
  const allData = {
    http: requireJson(resultsPath, "http.json"),
    ssl: requireJson(resultsPath, "ssl.json"),
    trackers: requireJson(resultsPath, "trackers.json"),
    nuclei: requireJson(resultsPath, "nuclei.json"),
    geoip: requireJson(resultsPath, "geoip.json"),
    lhr: await getScansFiles(
      resultsPath,
      /^lhr-.*\.json$/,
      (node) => node.requestedUrl
    ),
    owasp: await getScansFiles(
      resultsPath,
      /^zap-.*\.json$/,
      (node) => node.site[0]["@host"]
    ),
  };

  // group by url, remove some data
  const byUrl = getUrls().reduce((a, currentUrl) => {
    return {
      ...a,
      [currentUrl]: {
        http: allData.http
          .filter((result) => isSameUrl(currentUrl, result.url))
          .map((result) => ({
            ...omit(result.result, "responseHeaders"),
          })),
        ssl: allData.ssl
          .filter((result) => isSameUrl(currentUrl, result.url))
          .map((result) => ({
            ...result.result,
          })),
        trackers: allData.trackers.filter((result) =>
          isSameUrl(currentUrl, result.url)
        ),
        nuclei: allData.nuclei
          .filter((result) => isSameUrl(currentUrl, result.host))
          .map(({ request, response, ...data }) => data), // strip some data
        lhr: allData.lhr
          .filter((result) => isSameUrl(currentUrl, result.url))
          .map(({ url, filename, result }) => {
            const { requestedUrl, finalUrl, categories, audits } = result;
            // strip some data
            const newCategories = Object.keys(categories).reduce(
              (a, key) => ({
                ...a,
                [key]: omit(categories[key], "auditRefs"),
              }),
              {}
            );
            return {
              url,
              filename,
              requestedUrl,
              finalUrl,
              categories: newCategories,
              audits: pick(audits, ["metrics", "diagnostics"]),
            };
          }),
        owasp: allData.owasp
          .filter((result) => isSameHost(currentUrl, result.url))
          .map((result) => ({
            filename: result.filename,
            ...owaspCleanup(result.result),
          })),
        geoip: allData.geoip.filter((result) =>
          isSameUrl(currentUrl, result.url)
        ),
      },
    };
  }, {});

  return byUrl;
};

const getScansFiles = (resultsPath, pattern, getUrl) => {
  const files = fs.readdirSync(resultsPath);
  return files
    .filter((filename) => filename.match(pattern))
    .map((filename) => {
      const data = requireJson(resultsPath, filename);
      const url = getUrl(data);
      return {
        url,
        filename,
        result: data,
      };
    });
};

const generateReport = () => {
  const urls = getUrls().map((url) => {
    console.log(url);
    const urlb64 = Buffer.from(url).toString("base64");
    const urlPath = path.join(__dirname, "..", "..", "results", urlb64);
    const scans = fs.readdirSync(urlPath);
    scans.sort().reverse();
    const lastScan = scans.length && scans[0];
    if (!lastScan) {
      return null;
    }
    console.log("lastScan", lastScan);
    const latestFilesPath = path.join(urlPath, lastScan);
    const latestFiles = fs.readdirSync(latestFilesPath);
    //const files = fs.readdirSync(path.join(urlPath, lastScan));
    //console.log("files", files);
    return {
      url,
      http: requireJson(latestFilesPath, "http.json"),
      ssl: requireJson(latestFilesPath, "ssl.json"),
      thirdparties: requireJson(latestFilesPath, "thirdparties.json"),
      zap: requireJson(latestFilesPath, "zap.json"),
      nuclei: requireJson(latestFilesPath, "nuclei.json"),
      lhr: requireJson(latestFilesPath, "lhr.json"),

      // nuclei: requireJson(resultsPath, "nuclei.json"),
      // geoip: requireJson(resultsPath, "geoip.json"),
      // lhr: await getScansFiles(
      //   resultsPath,
      //   /^lhr-.*\.json$/,
      //   (node) => node.requestedUrl
      // ),
      // owasp: await getScansFiles(
      //   resultsPath,
      //   /^zap-.*\.json$/,
      //   (node) => node.site[0]["@host"]
      // ),
    };
  });
  return urls;
};

if (require.main === module) {
  generateReport();
  //.then((d) => console.log(JSON.stringify(d, null, 2)))
  //.catch(console.log);
}
