const makeBadge = (label, summary, key) => {
  const score = summary.scores[key];
  let badge;
  if (score === 1) {
    badge = "🏆";
  } else {
    const color =
      score > 0.8
        ? "success"
        : score > 0.6
        ? "yellowgreen"
        : score > 0.4
        ? "orange"
        : "red";

    badge = `![](https://img.shields.io/static/v1?label=${label}&message=${score}&color=${color})`;
  }
  return `[${badge}](${getDetailUrl(summary)}#${key})`;
};

const makeUrl = (summary) => {
  const small = summary.requestedUrl
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
  return `[${small}](${summary.requestedUrl})`;
};

const getDetailUrl = (summary) =>
  `https://socialgouv.github.io/lighthouse-dashboard/results/${summary.filename.replace(
    /\.json$/,
    ".html"
  )}`;

const makeDetailUrl = (summary) => {
  return `[🔎](${getDetailUrl(summary)})`;
};

const makeSummaryRow = (summary) =>
  `${makeUrl(summary)} | ${makeDetailUrl(summary)} | ${makeBadge(
    "perf",
    summary,
    "performance"
  )} | ${makeBadge("a11y", summary, "accessibility")}  | ${makeBadge(
    "practices",
    summary,
    "best-practices"
  )}  | ${makeBadge("seo", summary, "seo")}  | ${makeBadge(
    "pwa",
    summary,
    "pwa"
  )}`;

const toMarkdown = (summaries) => {
  const markdown = [
    `# Lighthouse dashboard\n`,
    `
Url | details | [Perf](https://web.dev/lighthouse-performance) | [a11y](https://web.dev/lighthouse-accessibility) | [Practices](https://web.dev/lighthouse-best-practices/) | [SEO](https://web.dev/lighthouse-seo/) | [PWA](https://web.dev/lighthouse-pwa/)
----|:-------:|:----:|:----:|:---------:|:---:|:------:`,
    summaries.map(makeSummaryRow).join("\n"),
  ].join("\n");

  return markdown;
};

module.exports = toMarkdown;
