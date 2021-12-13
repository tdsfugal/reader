import React from "react"
import { useQuery, gql } from "@apollo/client"

const GET_ARTICLES = gql`
  query GetArticles($params: QueryParams!) {
    getArticles(params: $params) {
      _id
      status
      totalResults
      results {
        _id
        title
        author
        description
        url
        urlToImage
        publishedAt
        content
        source {
          id
          name
        }
      }
    }
  }
`

const NewsReader = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES, {
    variables: {
      params: {
        q: "nigeria",
        // qInTitle:
        // sources: [String]
        // domains: [String]
        // excludeDomains: [String]
        from: "2021-12-12",
        // to: String
        // language: String
        // sortBy: String
        // pageSize: Int
        // page: Int
      },
    },
  })

  if (loading || error) {
    if (error) console.log(error)
    return <div>NEWS READER</div>
  }

  console.log(data)

  return <div>GOT DATA</div>
}

export default NewsReader
