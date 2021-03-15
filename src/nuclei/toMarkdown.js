const entriesByUrl = require("./entriesByUrl");

const makeBadge = (severity, count) => {
  if (count === 0) {
    badge = "🏆";
  }
  const color =
    severity === "critical"
      ? "red"
      : severity === "high"
      ? "red"
      : severity === "medium"
      ? "orange"
      : severity === "low"
      ? "orange"
      : "success";

  badge = `![](https://img.shields.io/static/v1?label=${severity}&message=${count}&color=${color})`;
  return badge;
};

const smallUrl = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");
const slugify = (url) => smallUrl(url).replace(/\./g, "");

const makeUrl = (url) => {
  const small = smallUrl(url);
  return `[${small}](${url})`;
};

const getDetailUrl = (summary) =>
  `https://socialgouv.github.io/nuclei-dashboard/results/${summary.filename.replace(
    /\.json$/,
    ".html"
  )}`;

const makeDetailUrl = (summary) => {
  return `[🔎](${getDetailUrl(summary)})`;
};

const toMarkdown = (entries) => {
  const byUrl = entriesByUrl(entries);

  const severities = Array.from(
    new Set(entries.map((entry) => entry.severity))
  );

  const markdown = [
    `# Nuclei dashboard\n`,
    `
Url                  | details | ${severities
      .map((sev) => `${sev}`)
      .join(" | ")}
---------------------|:-------:|${severities.map((sev) => `:---:`).join(" | ")}
${Object.keys(byUrl)
  .map(
    (url) =>
      `${makeUrl(url)} | [🔎](#${slugify(url)}) | ${severities
        .map((sev) =>
          makeBadge(sev, byUrl[url].filter((e) => e.severity === sev).length)
        )
        .join(" | ")}`
  )
  .join("\n")}
`,
    ``,
    `## Details`,
    ``,
    `${Object.keys(byUrl)
      .map(
        (url) =>
          `### ${makeUrl(url)}

severity | matcher | name
---------|---------|---------
${byUrl[url]
  .map((entry) => `${entry.severity} | ${entry.matcher_name} | ${entry.name}`)
  .join("\n")}

`
      )
      .join("\n")}`,
  ].join("\n");

  return markdown;
};

module.exports = toMarkdown;
