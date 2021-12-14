import React, { useEffect } from "react"
import { useLazyQuery, gql, useReactiveVar } from "@apollo/client"
import { queryKeywordsVar } from "../state"

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
  // This hook listens for changes in the queryKeywordsVar.  These changes are
  // added by the search field.
  const queryKeywords = useReactiveVar(queryKeywordsVar)

  // This lazy query does not run on initial render.  It is run immediately
  // after the initial render by the useEffect hook, and again whenever one of
  // the query parameters changes.
  const [getResults, { loading, error, data }] = useLazyQuery(GET_TOP_ARTICLES)

  // This hook fires on change in one of the three parameters
  useEffect(() => {
    let params = {}
    if (queryKeywords && queryKeywords.length > 0) params.q = queryKeywords
    if (category) params.category = category
    if (country) params.country = country
    console.log(params)
    getResults({ variables: { params } })
  }, [queryKeywords, category, country, getResults])

  // This is a boilerplate check that guards against queries in flight and botched
  // queries.
  if (loading || error || !data) {
    if (error) console.log(error)
    return null
  }

  // Results are a list of article metadata objects.
  const { results } = data.getHeadlines

  // This map converts the metadata to renderable React elements.
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

  // The elements are displayed in a carousell of sorts.
  return <ArticlesView>{articles}</ArticlesView>
}

export default Reader
