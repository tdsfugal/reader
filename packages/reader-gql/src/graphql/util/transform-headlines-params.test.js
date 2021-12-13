const { transformHeadlinesParams } = require("./transform-headlines-params");

describe("graphql/news/transformHeadlinesParams", () => {
  test("Returns simple param fields unmodified", () => {
    const expected = {
      country: "gb",
      category: "sports",
      q: "Nigeria",
      pageSize: 50,
      page: 2,
    };
    const inputParams = { ...expected };
    const actual = transformHeadlinesParams(inputParams);
    expect(actual).toEqual(expected);
  });

  test("Packages sources array into string form", () => {
    const sources = ["one", "two", "three"];
    const expected = "one, two, three";
    const { sources: actual } = transformHeadlinesParams({ sources });
    expect(actual).toEqual(expected);
  });

  // Note - there are many more validation edge cases that could be caught.
  // The newsAPI will catch them, so in the interest of being a lazy engineer
  // I am punting on the validation/testing for these cases. The worst that will
  // happen is that the query will return an error. In production, on a
  // mission-critical system, these cases should be handled, and the
  // handling tested
});
