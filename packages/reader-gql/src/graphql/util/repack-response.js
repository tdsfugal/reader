// const logger = require("pino")();

// logger.level = "debug";

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

module.exports = { repackResponse };
