const path = require("path");
const format = require("date-fns/format");

const smallUrl = (url) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const slugify = (url) => smallUrl(url).replace(/\./g, "");

const makeUrl = (url) => {
  const small = smallUrl(url);
  return `[${small}](${url})`;
};

const makeSmallerUrl = (url) => {
  const MAX_LENGTH = 25;
  const smaller = smallUrl(url);
  if (smaller.length > MAX_LENGTH) {
    return `[${smaller.substring(0, MAX_LENGTH - 3) + "..."}](${url})`;
  }
  return `[${smaller}](${url})`;
};

// https://github.com/ssllabs/research/wiki/SSL-Server-Rating-Guide
const makeBadge = (grade) => {
  if (!grade) {
    return `![](https://img.shields.io/static/v1?label=&message=INVALID&color=red)`;
  }
  const colors = [
    "brightgreen",
    "green",
    "yellowgreen",
    "yellow",
    "orange",
    "red",
  ];

  const color = colors[Math.min(colors.length - 1, grade.charCodeAt(0) - 65)];

  return `![](https://img.shields.io/static/v1?label=grade&message=${encodeURIComponent(
    grade
  )}&color=${color})`;
};

const validBadge = (truthy) => {
  if (truthy) {
    return "✔️";
  }
  return "❌";
};

const invalidBadge = (truthy) => {
  if (truthy) {
    return "⚠️";
  }
  return "✔️";
};

const makeTableRow = (row) => {
  const endpoint = row.tls.endpoints[0];
  const hasCsp = row.http.details["content-security-policy"].pass;
  const hasCookies = row.http.details["cookies"].pass;
  const hasHsts = row.http.details["strict-transport-security"].pass;
  return `[${smallUrl(row.url)}](https://observatory.mozilla.org/analyze/${
    row.url
  }) | [${makeBadge(
    endpoint.grade
  )}](https://www.ssllabs.com/ssltest/analyze.html?d=${row.url}) | [${makeBadge(
    row.http.grade
  )}](https://observatory.mozilla.org/analyze/${row.url}) | ${validBadge(
    hasCsp
  )}| ${validBadge(hasCookies)} | ${validBadge(hasHsts)} |`;
};

const toMarkdown = (results) => {
  const markdown = [
    `# SSL dashboard`,
    ``,
    `
url | TLS_CERT   | HTTP    | CSP      | Cookies | HSTS
----|:----------:|:-------:|:--------:|:-------:|:-----:`,
    results.map(makeTableRow).join("\n"),
  ];

  return markdown.join("\n");
};

module.exports = toMarkdown;

if (require.main === module) {
  const jsonPath = process.argv[process.argv.length - 1];
  if (jsonPath.match(/\.json/)) {
    const results = require(path.join("..", jsonPath));
    const md = toMarkdown(results);
    console.log(md);
  }
}
