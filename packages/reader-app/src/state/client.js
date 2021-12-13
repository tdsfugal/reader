import { ApolloClient, InMemoryCache } from "@apollo/client"

const GRAPHQL_URI = "http://localhost:4000"

const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
})

export default client
