const fs = require("fs");
const path = require("path");

const makeBadge = (alert) => {
  const risk = parseInt(alert.riskcode);
  const colors = {
    0: "success",
    1: "green",
    2: "yellow",
    3: "orange",
    4: "red",
    5: "red",
  };
  const color = risk > 5 ? "red" : colors[risk];
  const label = encodeURIComponent(alert.riskdesc);
  const badge = `![](https://img.shields.io/static/v1?label=${label}&message=${alert.count}&color=${color})`;
  return badge;
};

const getMostRecentJson = (dir) => {
  const files = orderRecentJsons(dir);
  if (!files.length) {
    return undefined;
  }
  const content = fs.readFileSync(path.join(dir, files[0].file)).toString();
  return {
    path: `${dir}/${files[0].file}`,
    content: JSON.parse(content),
  };
};

const orderRecentJsons = (dir) =>
  fs
    .readdirSync(dir)
    .filter((file) => file.match(/\.json$/))
    .filter((file) => fs.lstatSync(path.join(dir, file)).isFile())
    .map((file) => ({ file, mtime: fs.lstatSync(path.join(dir, file)).mtime }))
    .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());

const getDirectories = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const rootPath = "./results";

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[()"']/g, "")
    .replace(/\W/g, "-");

const latestScans = getDirectories(rootPath)
  .map((dirName) => getMostRecentJson(path.join(rootPath, dirName)))
  .filter(Boolean);

const orderBySeverity = (a, b) => {
  // high criticity first
  const order = parseInt(b.riskcode) - parseInt(a.riskcode);
  if (order === 0) {
    // high confidence first
    return parseInt(b.confidence) - parseInt(a.confidence);
  }
  return order;
};

const parseScans = (scans) => {
  const markdown = ["# OWASP Zap Scan", ""];

  scans.forEach(({ path, content }) => {
    markdown.push(
      `## [${content.site[0]["@host"]}](${content.site[0]["@name"]})`
    );
    markdown.push("");

    markdown.push(`
Url | severity | name
----|-------|-------`);

    content.site.forEach((site) => {
      const alerts = site.alerts;
      alerts.sort(orderBySeverity);
      alerts.forEach((alert) => {
        markdown.push(
          `[${site["@host"]}](${site["@name"]}) | ${makeBadge(alert)} | [${
            alert.name
          }](./${path.replace(/\.json$/, ".md")}#${slugify(alert.name)})`
        );
      });
    });
  });
  return markdown.join("\n");
};

console.log(parseScans(latestScans));
