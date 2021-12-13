const { newsResolvers, transformParams } = require("./news");

describe("graphql/news/transformParams", () => {
  test("Returns simple param fields unmodified", () => {
    const expected = {
      q: "Nigeria",
      qInTitle: "Africa",
      from: "2021-12-12",
      to: "2021-12-13",
      language: "en",
      sortBy: "relevance",
      pageSize: 50,
      page: 2,
    };
    const inputParams = { ...expected };
    const actual = transformParams(inputParams);
    expect(actual).toEqual(expected);
  });

  test("Packages sources array into string form", () => {
    const sources = ["one", "two", "three"];
    const expected = "one, two, three";
    const { sources: actual } = transformParams({ sources });
    expect(actual).toEqual(expected);
  });

  test("Packages domains array into string form", () => {
    const domains = ["one", "two", "three"];
    const expected = "one, two, three";
    const { domains: actual } = transformParams({ domains });
    expect(actual).toEqual(expected);
  });

  test("Packages exclueDomains array into string form", () => {
    const excludeDomains = ["one", "two", "three"];
    const expected = "one, two, three";
    const { excludeDomains: actual } = transformParams({ excludeDomains });
    expect(actual).toEqual(expected);
  });

  // Note - there are many more validation edge cases that could be caught.
  // The newsAPI will catch them, so in the interest of being a lazy engineer
  // I am punting on the validation/testing for these cases. The worst that will
  // happen is that the query will return an error. In production, on a
  // mission-critical system, these cases should be handled, and the
  // handling tested
});

// describe("graphql/news/newsResolvers", () => {
//   test("GetArticles", async () => {
//     expect(true).toBe(false);
//   });
// });
