const { gql } = require("apollo-server");

const { newsApi } = require("../connectors");

const newsTypeDefs = gql`
  type Content {
    title: String
    author: String
  }

  type Query {
    content: [Content]
  }
`;

const newsResolvers = {
  Query: {
    content: () => newsApi.getContent(),
  },
};

module.exports = { newsTypeDefs, newsResolvers };
