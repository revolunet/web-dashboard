const parseReports = require("./parseReports");
const toMarkdown = require("./toMarkdown");

const generateReport = (reportsPath) => {
  const summaries = parseReports(reportsPath);
  const markdown = toMarkdown(summaries);

  console.log(markdown);
};

if (require.main === module) {
  generateReport(process.argv[process.argv.length - 1]);
}
