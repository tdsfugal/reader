import React from "react"
import Layout from "./layout"

import HeadlinesReader from "./headlines-reader"

export default function HeadlinesPage({ pagePath }) {
  return (
    <Layout pagePath={pagePath}>
      <HeadlinesReader />
    </Layout>
  )
}
