const fs = require("fs");
const path = require("path");

const parseReport = (filename, report) => {
  const categories = [
    "performance",
    "accessibility",
    "best-practices",
    "seo",
    "pwa",
  ];
  const data = {
    requestedUrl: report.requestedUrl,
    runWarnings: report.runWarnings,
    filename,
    scores: categories.reduce(
      (a, c) => ({ ...a, [c]: report.categories[c].score }),
      {}
    ),
  };
  return data;
};

const parseReports = (reportsPath) => {
  const files = fs.readdirSync(reportsPath);
  const reports = files
    .filter((name) => name.match(/\.json/))
    .map((name) => {
      const reportData = fs
        .readFileSync(path.join(reportsPath, name))
        .toString();
      return parseReport(name, JSON.parse(reportData));
    });
  return reports;
};

module.exports = parseReports;
