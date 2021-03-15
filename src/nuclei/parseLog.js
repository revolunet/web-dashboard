const fs = require("fs");
const path = require("path");

const parseLog = (filename) => {
  const logData = fs.readFileSync(filename).toString();
  const entries = logData
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      let data;
      try {
        data = JSON.parse(line);
      } catch (e) {
        console.log("e", e);
      }
      return data;
    })
    .filter(Boolean);
  return entries;
};

module.exports = parseLog;
