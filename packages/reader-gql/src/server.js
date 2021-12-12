const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const { NewsApi } = require("./connectors");
const { typeDefs, resolvers } = require("./graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { newsApi: new NewsApi() },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});

module.exports = { server };
