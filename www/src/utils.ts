export const smallUrl = (url: string) =>
  url
    .toLowerCase()
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "");
