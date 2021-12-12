const axios = require("axios");
const logger = require("pino")();

// logger.level = "debug";

class NewsApi {
  constructor() {
    // The connector is constructed this way to hide the API_KEY. The "caller"
    // instance of axios exists only within the closure of this constructor.
    // This is not a perfect solution for making the key inaccesabile, but it
    // does make it difficult enough that it will not be inadvertently exposed.
    // The downside of this pattern is that all of the methods that use the
    // caller instance must be defined inside the closure too.
    const baseOptions = {
      baseUrl: "https://newsapi.org",
      headers: {
        Accepts: "applications/json",
        Authorization: process.env.API_KEY,
      },
    };

    this.getContent = async (params = {}) => {
      try {
        logger.debug("GetContent called");
        logger.debug({ params });
        const options = { params, ...baseOptions };
        const resp = await axios.get("/v2/everything", options);
      } catch (e) {
        console.log(e);
      }
    };
  }
}

module.exports = { NewsApi };
