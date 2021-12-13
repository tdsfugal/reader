// const logger = require("pino")();

// logger.level = "debug";

function transformEverythingParams(params) {
  // This function begins by making a copy of the original params.
  const queryParams = { ...params };

  if (queryParams.sources) {
    queryParams.sources = queryParams.sources.join(", ");
  }

  if (queryParams.domains) {
    queryParams.domains = queryParams.domains.join(", ");
  }

  if (queryParams.excludeDomains) {
    queryParams.excludeDomains = queryParams.excludeDomains.join(", ");
  }
  return queryParams;
}

module.exports = { transformEverythingParams };
