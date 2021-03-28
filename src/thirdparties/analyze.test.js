const { rootDomain, belongsToSameDomain } = require("./analyze");

describe("rootDomain", () => {
  const tests = [
    ["https://www.a.com/hello", "a.com"],
    ["https://xxx.www.a.com/hello", "a.com"],
    ["https://xxx.www.a.com", "a.com"],
    ["xxx.www.a.com", "a.com"],
    ["xxx.www.a.com/blabla", "a.com"],
    ["a.com", "a.com"],
    ["https://www.some.domain/assets/img/logo.png", "some.domain"],
  ];
  tests.forEach(([url, root]) => {
    test(`${url} = ${root}`, () => expect(rootDomain(url)).toEqual(root));
  });
});

describe("belongsToSameDomain", () => {
  const isValid = [
    ["https://www.a.com/hello", "http://www.a.com/hello2"],
    ["https://xxx.www.a.com/hello", "http://www.a.com/hello2"],
  ];
  const isInvalid = [
    ["https://www.a.com/hello", "http://www.a.com.c.com/hello2"],
    ["https://www.b.com", "http://www.a.com"],
  ];
  isValid.forEach(([url1, url2]) => {
    test(`${url1} = ${url2}`, () =>
      expect(belongsToSameDomain(url1, url2)).toEqual(true));
  });
  isInvalid.forEach(([url1, url2]) => {
    test(`${url1} != ${url2}`, () =>
      expect(belongsToSameDomain(url1, url2)).toEqual(false));
  });
});
