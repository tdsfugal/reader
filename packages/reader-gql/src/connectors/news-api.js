const axios = require("axios");
const logger = require("pino")();

// logger.level = "debug";

class NewsApi {
  constructor() {
    this.everything_url = "https://newsapi.org/v2/everything";
    this.headlines_url = "https://newsapi.org/v2/top-headlines";
    this.headers = {
      Accept: "applications/json",
      Authorization: process.env.API_KEY,
    };
  }

  async getEverything(params = {}) {
    logger.debug(`GetEverything called with ${JSON.stringify(params)}`);
    const data = await this._call(this.everything_url, params);
    if (data) {
      const { totalResults, articles } = data;
      return { status: "ok", totalResults, articles };
    } else {
      return null;
    }
  }

  async getHeadlines(params = {}) {
    logger.debug(`GetHeadlines called with ${JSON.stringify(params)}`);
    const data = await this._call(this.headlines_url, params);
    if (data) {
      const { totalResults, articles } = data;
      return { status: "ok", totalResults, articles };
    } else {
      return null;
    }
  }

  // This is an internal method, not to be called from outside this class.
  async _call(url, params = {}) {
    try {
      const options = { params, headers: this.headers };
      const resp = await axios.get(url, options);

      if (!resp || !resp.data) {
        logger.warn("No Response or data missing");
        return null;
      }

      const { status } = resp.data;
      if (status === "ok") {
        // Happy path
        return resp.data;
      } else {
        // Sad path. Currently bypassed by Axios throwing an error.
        const { code, message } = resp.data;
        logger.warn(
          `Call not successful. Status = ${status}, Code=${code}, Message=${message}`
        );
        return null;
      }
    } catch (e) {
      logger.error(e);
      return null;
    }
  }
}

module.exports = { NewsApi };
