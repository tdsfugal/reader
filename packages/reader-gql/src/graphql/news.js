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

  type Response {
    _id: ID!
    status: String
    totalResults: Int
    articles: [Article]
  }

  type Query {
    getArticles: Response
  }
`;

var count = 0;

const newsResolvers = {
  Query: {
    getArticles: async (_, { args }, { newsApi }) => {
      const _id = `response-${count++}`;

      // TODO - get rid of these hardcodes`

      const response = await newsApi.getArticles({
        q: "Covid",
        from: "2021-12-12",
      });
      if (response) {
        // GraphQL likes id values.
        const { status, totalResults, articles } = response;
        const articlesWithId = articles
          ? articles.map((a) => {
              return { _id: a.url, ...a };
            })
          : [];
        // Reassemble and ship in GraphQL schema format
        return { _id, status, totalResults, articles: articlesWithId };
      } else {
        return { _id, status: "failed" };
      }
    },
  },
};

module.exports = { newsTypeDefs, newsResolvers };
