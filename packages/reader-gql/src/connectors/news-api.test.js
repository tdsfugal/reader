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
    };
    axios.get = jest.fn();
    const nApi = new NewsApi();
    const resp = await nApi.getContent();
    expect(axios.get).toHaveBeenCalledWith(path, options);
  });
});
