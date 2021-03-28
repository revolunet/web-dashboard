const fs = require("fs");
const { toHostname, getUrls } = require("./utils");

jest.mock("fs");

const tests = [
  ["http://www.free.fr", "www.free.fr"],
  ["http://sub.www.free.fr", "sub.www.free.fr"],
  ["http://free.fr/some/page", "free.fr"],
  ["free.fr/some/page", "free.fr"],
  ["/some/page", null],
];

describe("toHostname", () => {
  tests.forEach(([input, output]) => {
    test(`should extract ${output} in ${input}`, () => {
      //@ts-ignore
      expect(toHostname(input)).toEqual(output);
    });
  });
});

describe("getUrls", () => {
  test("should parse url files correctly", () => {
    //@ts-expect-error
    fs.readFileSync.mockReturnValue(`

url1
url2
# comment
url3

`);

    expect(getUrls()).toEqual(["url1", "url2", "url3"]);
  });
});
