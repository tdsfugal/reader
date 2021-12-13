import { ApolloClient, InMemoryCache } from "@apollo/client"

const GRAPHQL_URI = "http://localhost:4000"

export const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
})
