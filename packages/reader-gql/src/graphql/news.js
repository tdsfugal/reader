const { gql } = require("apollo-server");

const {
  transformEverythingParams,
  transformHeadlinesParams,
  repackResponse,
} = require("./util");

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

  input EverythingParams {
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

  input HeadlinesParams {
    country: String
    category: String
    sources: [String]
    q: String
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
    getEverything(params: EverythingParams!): Response
    getHeadlines(params: HeadlinesParams!): Response
  }
`;

// Because the params are delivered via GraphQL the data form is validated
// already.  Although there are a few fields that need range and value
// checks the News API will perform them and return an error. So, for speed
// of development ans simplicity no real validation will occur here.
// Tranformation is still needed, though. Some of the fields are in array
// form in GrapqhQL for easier handling. These need to be transformed into
// comma separated values in a string. This function does that.
const newsResolvers = {
  Query: {
    getEverything: async (_, { params = {} }, { newsApi }) => {
      const queryParams = transformEverythingParams(params);
      logger.debug(queryParams);
      const response = await newsApi.getEverything(queryParams);
      return repackResponse(response);
    },
    getHeadlines: async (_, { params = {} }, { newsApi }) => {
      const queryParams = transformHeadlinesParams(params);
      logger.debug(queryParams);
      const response = await newsApi.getHeadlines(queryParams);
      return repackResponse(response);
    },
  },
};

module.exports = { newsTypeDefs, newsResolvers };
