jest.mock("node-fetch");
jest.useFakeTimers();

const scan = require("./scan");

const { default: fetch } = require("node-fetch");
const { Response } = jest.requireActual("node-fetch");

describe("should scan an URL", () => {
  test("should make full scan", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve(
        new Response(JSON.stringify({ state: "FINISHED", scan_id: 42 }))
      )
    );
    fetch.mockImplementationOnce(() =>
      Promise.resolve(
        new Response(JSON.stringify({ results: { some: "result" } }))
      )
    );
    const result = await scan("http://www.free.fr");
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenNthCalledWith(
      1,
      "https://http-observatory.security.mozilla.org/api/v1/analyze?host=www.free.fr&hidden=true&rescan=true",
      {
        method: "POST",
      }
    );
    expect(fetch).toHaveBeenNthCalledWith(
      2,
      "https://http-observatory.security.mozilla.org/api/v1/getScanResults?scan=42",
      {
        method: "GET",
      }
    );

    expect(result).toEqual({
      details: { results: { some: "result" } },
      scan_id: 42,
      state: "FINISHED",
      url: "http://www.free.fr",
    });
  });
});
