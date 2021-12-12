const { NewsApi } = require("./news-api");

test("compiles", () => {
  expect(new NewsApi()).toBeInstanceOf(NewsApi);
});
