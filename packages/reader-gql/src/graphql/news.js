const { gql } = require("apollo-server");

const logger = require("pino")();

// logger.level = "debug";

const newsTypeDefs = gql`
  type Source {
    id: ID
    name: String
  }

  type Article {
    _id: ID!
    title: String
    author: String
    description: String
    source: Source
    url: String
    urlToImage: String
    publishedAt: String
    content: String
  }

  input QueryParams {
    q: String
    qInTitle: String
    sources: [String]
    domains: [String]
    excludeDomains: [String]
    from: String
    to: String
    language: String
    sortBy: String
    pageSize: Int
    page: Int
  }

  type Response {
    _id: ID!
    status: String
    totalResults: Int
    results: [Article]
  }

  type Query {
    getArticles(params: QueryParams!): Response
  }
`;

var responseIndex = 0;

const newsResolvers = {
  Query: {
    getArticles: async (_, { params = {} }, { newsApi }) => {
      const _id = `resp-${responseIndex++}`;

      // Because the params are delivered via GraphQL the data form is validated
      // already.  Although there are a few fields that need range and value
      // checks the News API will perform them and return an error. So, for speed
      // of development ans simplicity no real validation will occur here.
      // Tranformation is still needed, though. Some of the fields are in array
      // form in GrapqhQL for easier handling. These need to be transformed into
      // comma separated values in a string. This function does that.
      const queryParams = transformParams(params);
      logger.debug(queryParams);

      // Call the newsAPI to get articles.
      const response = await newsApi.getArticles(queryParams);

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
    },
  },
};

function transformParams(params) {
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

module.exports = { newsTypeDefs, newsResolvers, transformParams };
