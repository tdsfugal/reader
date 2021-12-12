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
      params: {},
      baseUrl: "https://newsapi.org",
      headers: {
        Accepts: "applications/json",
        Authorization: "Super Secret String",
      },
      params: {},
    };
    axios.get = jest.fn().mockResolvedValue({
      status: "ok",
      totalResults: 0,
      articles: [],
    });
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
      params,
      baseUrl: "https://newsapi.org",
      headers: {
        Accepts: "applications/json",
        Authorization: "Super Secret String",
      },
    };
    axios.get = jest.fn().mockResolvedValue({
      status: "ok",
      totalResults: 0,
      articles: [],
    });
    const nApi = new NewsApi();
    const resp = await nApi.getContent(params);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(path, options);
  });

  test("Parses response correctly", async () => {
    const path = "/v2/everything";
    const options = {};
    const articles = [
      { author: "fred flintsone", title: "Rocks I Have Seen" },
      { author: "batman", title: "Capes - too dangerous?" },
      { author: "coyote", title: "Acme Catalog" },
    ];
    axios.get = jest.fn().mockResolvedValue({
      status: "ok",
      totalResults: 3,
      articles,
    });
    const nApi = new NewsApi();
    const resp = await nApi.getContent();
    expect(resp).toEqual(expect.arrayContaining(articles));
  });

  test("Response not OK gives silent fail", async () => {
    const path = "/v2/everything";
    const options = {};
    axios.get = jest.fn().mockResolvedValue({ status: "fubar" });
    const nApi = new NewsApi();
    const resp = await nApi.getContent();
    expect(resp).toEqual([]);
  });

  test("Empty response gives silent fail", async () => {
    const path = "/v2/everything";
    const options = {};
    axios.get = jest.fn().mockResolvedValue(null);
    const nApi = new NewsApi();
    const resp = await nApi.getContent();
    expect(resp).toEqual([]);
  });
});
