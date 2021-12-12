import React from "react"
import Layout from "./layout"

export default function HomePage({ pagePath }) {
  return (
    <Layout pagePath={pagePath}>
      <div>Home Page!</div>
    </Layout>
  )
}
