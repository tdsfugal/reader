import React from "react"
import Layout from "./layout"

import NewsReader from "./news-reader"

export default function NewsPage({ pagePath }) {
  return (
    <Layout pagePath={pagePath}>
      <NewsReader />
    </Layout>
  )
}
