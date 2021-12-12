const axios = require("axios");

const { NewsApi } = require("./news-api");

describe("connectors/news-api", () => {
  test("compiles", () => {
    expect(new NewsApi()).toBeInstanceOf(NewsApi);
  });

  test("makes get call with API_KEY as auth", async () => {
    process.env.API_KEY = "Super Secret String";
    const path = "/v2/everything";
    const options = {
      baseUrl: "https://newsapi.org",
      headers: {
        Accepts: "applications/json",
        Authorization: "Super Secret String",
      },
      params: {},
    };
    axios.get = jest.fn();
    const nApi = new NewsApi();
    const resp = await nApi.getContent();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(path, options);
  });

  test("makes get call with query params", async () => {
    const params = {
      one: "ONE",
      two: "TWO",
      three: "THREE",
    };
    process.env.API_KEY = "Super Secret String";
    const path = "/v2/everything";
    const options = {
      baseUrl: "https://newsapi.org",
      headers: {
        Accepts: "applications/json",
        Authorization: "Super Secret String",
      },
      params: { ...params },
    };
    axios.get = jest.fn();
    const nApi = new NewsApi();
    const resp = await nApi.getContent(params);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(path, options);
  });
});
