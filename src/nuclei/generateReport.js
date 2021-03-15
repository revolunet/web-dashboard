const parseLog = require("./parseLog");
const toMarkdown = require("./toMarkdown");

const generateReport = (logPath) => {
  const entries = parseLog(logPath);
  const markdown = toMarkdown(entries);

  return markdown;
};

if (require.main === module) {
  const md = generateReport(process.argv[process.argv.length - 1]);
  console.log(md);
}
