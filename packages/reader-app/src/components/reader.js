import React from "react"
import { useQuery, gql } from "@apollo/client"

import { ArticlesView } from "../styles"

import { Article } from "./article"

const GET_TOP_ARTICLES = gql`
  query GetTopArticles($params: HeadlinesParams!) {
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

const Reader = ({ country, category = null }) => {
  const { loading, error, data } = useQuery(GET_TOP_ARTICLES, {
    variables: {
      params: category
        ? {
            category: category,
            country: country,
          }
        : {
            country: country,
          },
    },
  })

  if (loading || error) {
    if (error) console.log(error)
    return <div>READER</div>
  }

  const { results } = data.getHeadlines

  const articles = results
    ? results.map(result => {
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
    : null

  return <ArticlesView>{articles}</ArticlesView>
}

export default Reader
