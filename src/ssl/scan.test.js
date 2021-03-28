jest.useFakeTimers();
jest.mock("node-fetch");

const scan = require("./scan");

const { default: fetch } = require("node-fetch");
const { Response } = jest.requireActual("node-fetch");

function flushPromises() {
  // Wait for promises running in the non-async timer callback to complete.
  // From https://stackoverflow.com/a/58716087/308237
  return new Promise((resolve) => setImmediate(resolve));
}

beforeEach(() => {
  fetch.mockClear();
});

describe("should scan an URL", () => {
  test("should make full scan", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve(
        new Response(JSON.stringify({ status: "READY", some: "data" }))
      )
    );
    const result = await scan("http://www.free.fr");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenNthCalledWith(
      1,
      `https://api.ssllabs.com/api/v2/analyze?publish=off&fromCache=on&maxAge=24&host=www.free.fr`
    );
    expect(result).toEqual({
      some: "data",
      status: "READY",
    });
  });
  test("should retry", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve(new Response(JSON.stringify({ status: "NOTREADY" })))
    );
    fetch.mockImplementationOnce(async () =>
      Promise.resolve(new Response(JSON.stringify({ status: "NOTREADY" })))
    );
    fetch.mockImplementationOnce(async () =>
      Promise.resolve(
        new Response(JSON.stringify({ status: "READY", some: "data" }))
      )
    );
    const scanner = scan("http://www.free.fr");
    jest.runAllTimers();
    await flushPromises();
    jest.runAllTimers();
    await flushPromises();
    jest.runAllTimers();
    await flushPromises();
    jest.runAllTimers();

    const result = await scanner;

    expect(fetch).toHaveBeenCalledTimes(3);

    expect(fetch).toHaveBeenNthCalledWith(
      1,
      `https://api.ssllabs.com/api/v2/analyze?publish=off&fromCache=on&maxAge=24&host=www.free.fr`
    );
    expect(fetch).toHaveBeenNthCalledWith(
      2,
      `https://api.ssllabs.com/api/v2/analyze?publish=off&fromCache=on&maxAge=24&host=www.free.fr`
    );
    expect(fetch).toHaveBeenNthCalledWith(
      3,
      `https://api.ssllabs.com/api/v2/analyze?publish=off&fromCache=on&maxAge=24&host=www.free.fr`
    );
    expect(result).toEqual({
      some: "data",
      status: "READY",
    });
  });
});
