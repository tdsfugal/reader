const { ApolloServer } = require("apollo-server");

const { server } = require("./server");

test("compiles", () => {
  expect(server).toBeInstanceOf(ApolloServer);
});
