const fs = require("fs");
const path = require("path");

const { toHostname } = require("../utils");

const requireJson = (resultsPath, filename) => {
  try {
    return require(path.join("..", "..", resultsPath, filename));
  } catch (e) {
    return [];
  }
};

const smallUrl = (url) =>
  url
    .toLowerCase()
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "");

const isSameUrl = (url1, url2) => smallUrl(url1) === smallUrl(url2);
const isSameHost = (url1, url2) => toHostname(url1) === toHostname(url2);

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

  // group by url
  const byUrl = allData.ssl
    .map((result) => result.url)
    .reduce((a, currentUrl) => {
      return {
        ...a,
        [currentUrl]: {
          http: allData.http.filter((result) =>
            isSameUrl(currentUrl, result.url)
          ),
          ssl: allData.ssl.filter((result) =>
            isSameUrl(currentUrl, result.url)
          ),
          trackers: allData.trackers.filter((result) =>
            isSameUrl(currentUrl, result.url)
          ),
          nuclei: allData.nuclei.filter((result) =>
            isSameUrl(currentUrl, result.host)
          ),
          lhr: allData.lhr.filter((result) =>
            isSameUrl(currentUrl, result.url)
          ),
          owasp: allData.owasp.filter((result) =>
            isSameHost(currentUrl, result.url)
          ),
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

if (require.main === module) {
  const input = process.argv[process.argv.length - 1];
  exportData(input)
    .then((d) => console.log(JSON.stringify(d, null, 2)))
    .catch(console.log);
}
