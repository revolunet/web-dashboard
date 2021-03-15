const path = require("path");
const formatDistanceToNow = require("date-fns/formatDistanceToNow");

const trackers = require("./trackers");

const getTracker = (id) => trackers.find((t) => t.id === id);

const formatCount = (count) => (count === 0 ? "🏆" : count);

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

const makeBadge = (label, count) => {
  if (count === 0) {
    return "🏆";
  }

  let color = "orange";

  if (count >= 10) {
    color = "red";
  }
  if (count >= 30) {
    color = "black";
  }

  if (label === "others") {
    color = "yellow";
  }

  return `![](https://img.shields.io/static/v1?label=${label}&message=${count}&color=${color})`;
};

const toMarkdown = (results) => {
  const markdown = [`# third-parties dashboard`, ``];

  markdown.push(`
Url | Trackers | Others | Cookies
----|:--------:|:------:|:---------:`);

  results.forEach((result) => {
    markdown.push(
      `[${smallUrl(result.url)}](#${slugify(result.url)}) | ${
        result.trackers
          ? makeBadge(
              "trackers",
              result.trackers.filter((t) => t.type !== "unknown").length
            )
          : "-"
      } | ${
        result.trackers
          ? makeBadge(
              "others",
              result.trackers.filter((t) => t.type === "unknown").length
            )
          : "-"
      } | ${result.cookies ? makeBadge("cookies", result.cookies.length) : "-"}`
    );
  });

  markdown.push(``);

  results.forEach((result) => {
    const cookies =
      (result.cookies &&
        result.cookies.length &&
        `
### Cookies

Cookie | secure | httpOnly | expiration
-------|--------|----------|---------
${result.cookies
  .map((c) => {
    return `${c.name} | ${c.secure} | ${c.httpOnly} | ${formatDistanceToNow(
      c.expires * 1000
    )}`;
  })
  .join("\n")}`) ||
      "";

    const trackers =
      (result.trackers &&
        result.trackers.length &&
        `### Trackers

Name | Url | Remediation
-----|-----|-------------
${result.trackers
  .map((t) => {
    const trackerInfo = getTracker(t.type);
    return `${t.type} | ${makeSmallerUrl(t.value)} | ${
      trackerInfo ? trackerInfo.message : "-"
    }`;
  })
  .join("\n")}
  `) ||
      "";

    markdown.push(`## ${makeUrl(result.url)}`);
    markdown.push(trackers);
    markdown.push(cookies);
  });

  return markdown.join("\n");
};

if (require.main === module) {
  const jsonPath = process.argv[process.argv.length - 1];
  if (jsonPath.match(/\.json/)) {
    const result = require(path.join("..", jsonPath));
    const md = toMarkdown(result);
    console.log(md);
  }
}
