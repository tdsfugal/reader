const axios = require("axios");

const { NewsApi } = require("./news-api");

describe("connectors/news-api", () => {
  test("compiles", () => {
    expect(new NewsApi()).toBeInstanceOf(NewsApi);
  });

  test("makes get call with API_KEY as auth", async () => {
    process.env.API_KEY = "Super Secret String";
    const url = "https://newsapi.org/v2/everything";
    const options = {
      params: {},
      headers: {
        Accept: "applications/json",
        Authorization: "Super Secret String",
      },
      params: {},
    };
    axios.get = jest.fn().mockResolvedValue({
      data: {
        status: "ok",
        articles: [],
      },
    });
    const nApi = new NewsApi();
    const resp = await nApi.getArticles();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(url, options);
  });

  test("makes get call with query params", async () => {
    const params = {
      one: "ONE",
      two: "TWO",
      three: "THREE",
    };
    process.env.API_KEY = "Super Secret String";
    const url = "https://newsapi.org/v2/everything";
    const options = {
      params,
      headers: {
        Accept: "applications/json",
        Authorization: "Super Secret String",
      },
    };
    axios.get = jest.fn().mockResolvedValue({
      data: {
        status: "ok",
        articles: [],
      },
    });
    const nApi = new NewsApi();
    const resp = await nApi.getArticles(params);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(url, options);
  });

  test("Parses response correctly and adds _id", async () => {
    const path = "/v2/everything";
    const options = {};
    const articles = [
      {
        _id: "one",
        author: "Fred Flintsone",
        title: "Rocks I Have Seen",
        url: "one",
      },
      {
        _id: "two",
        author: "batman",
        title: "Capes - too dangerous?",
        url: "two",
      },
      {
        _id: "three",
        author: "Wile E. Coyote",
        title: "Acme Catalog",
        url: "three",
      },
    ];
    axios.get = jest.fn().mockResolvedValue({
      data: {
        status: "ok",
        totalResults: 100,
        articles,
      },
    });
    const nApi = new NewsApi();
    const resp = await nApi.getArticles();
    expect(resp.status).toBe("ok");
    expect(resp.totalResults).toBe(100);
    expect(resp.articles).toEqual(expect.arrayContaining(articles));
  });

  test("Empty response gives silent fail", async () => {
    const path = "/v2/everything";
    const options = {};
    axios.get = jest.fn().mockResolvedValue(null);
    const nApi = new NewsApi();
    const resp = await nApi.getArticles();
    expect(resp).toEqual(null);
  });

  test("Response with no data gives silent fail", async () => {
    const path = "/v2/everything";
    const options = {};
    axios.get = jest.fn().mockResolvedValue({ foo: "bar" });
    const nApi = new NewsApi();
    const resp = await nApi.getArticles();
    expect(resp).toEqual(null);
  });

  test("Response with status other than OK gives silent fail", async () => {
    const path = "/v2/everything";
    const options = {};
    axios.get = jest.fn().mockResolvedValue({ data: { status: "fubar" } });
    const nApi = new NewsApi();
    const resp = await nApi.getArticles();
    expect(resp.status).toBe("fubar");
  });
});
