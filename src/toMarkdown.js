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
const makeBadge = (endpoint) => {
  if (!endpoint.grade) {
    return `![](https://img.shields.io/static/v1?label=&message=INVALID&color=red)`;
  }
  const colors = [
    "brightgreen",
    "green",
    "yellow",
    "greenyellow",
    "orange,",
    "red",
  ];

  const color = colors[endpoint.grade.charCodeAt(0) - 65];

  return `![](https://img.shields.io/static/v1?label=grade&message=${encodeURIComponent(
    endpoint.grade
  )}&color=${color})`;
};

const validBadge = (truthy) => {
  if (truthy) {
    return "🏆";
  }
  return "❌";
};

const makeTableRow = (row) => {
  const endpoint = row.url.endpoints[0];
  const cert = row.url.certs[0];
  const hastTls = (version) =>
    endpoint.details.protocols.find(
      (p) => p.name === "TLS" && p.version === version
    );
  const hasTls12 = hastTls("1.2");
  const hasTls13 = hastTls("1.3");
  const hasHsts = endpoint.details.hstsPolicy;
  const hasDnsCaa = cert.dnsCaa;

  return `[${smallUrl(
    row.url.host
  )}](https://www.ssllabs.com/ssltest/analyze.html?d=${
    row.url.host
  }) | ${makeBadge(endpoint)} | ${validBadge(hastTls("1.0"))} | ${validBadge(
    hastTls("1.1")
  )} | ${validBadge(hastTls("1.2"))} | ${validBadge(
    hastTls("1.3")
  )} | ${validBadge(hasHsts)} | ${validBadge(hasDnsCaa)} | ${format(
    row.url.certs[0].notAfter,
    "LLL Y"
  )}`;
};

const toMarkdown = (results) => {
  const markdown = [
    `# SSL dashboard\n`,
    ``,
    `
Url | Grade   | TLS 1.0 | TLS 1.1 | TLS 1.2 | TLS 1.3 | HSTS | CAA | Expiration
----|:-------:|:-------:|:-------:|:-------:|:-------:|:----:|:---:|-----------`,
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
