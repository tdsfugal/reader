const logger = require("pino")();

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

function transformHeadlineParams(params) {
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

var responseIndex = 0;

function repackResponse(response) {
  const _id = `resp-${responseIndex++}`;
  if (response) {
    // Add _id values.  Apollo Client uses them to manage merges into the cache.
    const { status, totalResults, articles } = response;
    const articlesWithId = articles
      ? articles.map((a) => {
          return { _id: a.url, ...a };
        })
      : [];

    // Reassemble and ship in GraphQL schema format
    return { _id, status, totalResults, results: articlesWithId };
  } else {
    return { _id, status: "failed" };
  }
}

module.exports = {
  transformEverythingParams,
  transformHeadlineParams,
  repackResponse,
};
