import React from "react"
import { useQuery, gql } from "@apollo/client"

const GET_HEADLINES = gql`
  query GetHeadlines($params: HeadlinesParams!) {
    getHeadlines(params: $params) {
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

const HeadlinesReader = () => {
  const { loading, error, data } = useQuery(GET_HEADLINES, {
    variables: {
      params: {
        category: "sports",
        country: "gb",
      },
    },
  })

  if (loading || error) {
    if (error) console.log(error)
    return <div>HEADLINES READER</div>
  }

  console.log(data)

  return <div>GOT DATA</div>
}

export default HeadlinesReader
