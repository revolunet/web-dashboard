const fs = require("fs");
const path = require("path");
const ssllabs = require("node-ssllabs");
const pAll = require("p-all");

const getUrls = () =>
  fs
    .readFileSync(path.join(__dirname, "..", "urls.txt"))
    .toString()
    .split("\n")
    .filter(Boolean);

const scan = () => {
  const urls = getUrls();
  return pAll(
    urls.map(
      (url) =>
        new Promise((resolve, reject) =>
          ssllabs.scan(url, (err, host) => {
            if (err) {
              reject(err);
            } else {
              resolve({ url: host });
            }
          })
        )
    ),
    { concurrency: 1 }
  );
};

if (require.main === module) {
  scan()
    .then((results) => {
      console.log(JSON.stringify(results, null, 2));
    })
    .catch(console.log);
}

module.exports = scan;
