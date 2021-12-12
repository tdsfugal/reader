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
    getArticles: async (_, { params }, { newsApi }) => {
      const _id = `resp-${responseIndex++}`;

      const response = await newsApi.getArticles(params);
      if (response) {
        // GraphQL likes id values.
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

module.exports = { newsTypeDefs, newsResolvers };
