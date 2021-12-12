const axios = require("axios");
const logger = require("pino")();

logger.level = "debug";

class NewsApi {
  constructor() {
    this.url = "https://newsapi.org/v2/everything";
    this.headers = {
      Accept: "applications/json",
      Authorization: process.env.API_KEY,
    };
  }

  async getArticles(params = {}) {
    try {
      logger.debug(`GetContent called with ${JSON.stringify(params)}`);

      const options = { params, headers: this.headers };
      const resp = await axios.get(this.url, options);

      if (!resp || !resp.data) {
        logger.warn("No Response or data missing");
        return null;
      }

      const { status, totalResults, articles } = resp.data;
      if (status !== "ok") {
        logger.warn(`Status = ${status} was not ok`);
      }
      return { status, totalResults, articles };
    } catch (e) {
      logger.error(e);
      return null;
    }
  }
}

module.exports = { NewsApi };
