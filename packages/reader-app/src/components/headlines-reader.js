import React from "react"
import { useQuery, gql } from "@apollo/client"

import { ArticlesView } from "../styles"

import { Article } from "./article"

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

  const { results = [] } = data.getHeadlines

  const articles = results.map(result => {
    const {
      _id,
      title,
      author,
      description,
      url,
      urlToImage,
      publishedAt,
      content,
      source,
    } = result

    return (
      <Article
        key={_id}
        _id={_id}
        title={title}
        author={author}
        description={description}
        url={url}
        urlToImage={urlToImage}
        publishedAt={publishedAt}
        content={content}
        source={source}
      />
    )
  })

  return <ArticlesView>{articles}</ArticlesView>
}

export default HeadlinesReader
