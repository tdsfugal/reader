const { bookTypeDefs, bookResolvers } = require("./books");

const typeDefs = [bookTypeDefs];
const resolvers = { ...bookResolvers };

module.exports = { typeDefs, resolvers };
