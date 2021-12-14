import React, { useState } from "react"

import {
  ArticleView,
  UpperArticleView,
  LowerArticleView,
  HeadlineView,
} from "../../styles"

import Byline from "./byline"
import Content from "./content"
import Dateline from "./dateline"
import Photo from "./photo"
import Title from "./title"

const Article = ({
  _id,
  title,
  author,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
  source,
}) => {
  const [active, setActive] = useState(false)

  const redirect = () => {
    window.location.href = url
  }

  let date = publishedAt ? new Date(publishedAt) : null
  if (date) {
    const dArr = date.toDateString().split(" ")
    date = `${dArr[0]}, ${dArr[1]} ${dArr[2]}, ${dArr[3]}`
  }

  let upper = null
  if (active) {
    if (content) {
      upper = <Content content={content} />
    }
  } else {
    if (urlToImage) {
      upper = <Photo url={urlToImage} />
    } else {
      upper = <Content content={content} />
    }
  }

  return (
    <ArticleView
      onClick={redirect}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <UpperArticleView>{upper}</UpperArticleView>
      <LowerArticleView>
        <HeadlineView>
          <Dateline date={date} />
          <Title title={title} />
        </HeadlineView>
        <Byline author={author} />
      </LowerArticleView>
    </ArticleView>
  )
}

export default Article
