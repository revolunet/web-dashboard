const getKey = (entry) => entry.host.replace(/^https?:\/\//, "");

const entriesByUrl = (entries) =>
  entries.reduce((allEntries, entry) => {
    const key = getKey(entry);
    if (!allEntries[key]) {
      allEntries[key] = [];
    }
    allEntries[key].push(entry);
    return allEntries;
  }, {});

module.exports = entriesByUrl;
