// const logger = require("pino")();

// logger.level = "debug";

function transformHeadlinesParams(params) {
  // This function begins by making a copy of the original params.
  const queryParams = { ...params };

  // NOTE - sources and category cannot both have values. I don't see a natural
  // way to resolve this yet, but it does need to be checked and resolved
  // both on the front end and back here in the resolvers.  For now this will
  // just rely on the front-end keeping it straight.

  if (queryParams.sources) {
    queryParams.sources = queryParams.sources.join(", ");
  }

  return queryParams;
}

module.exports = { transformHeadlinesParams };
