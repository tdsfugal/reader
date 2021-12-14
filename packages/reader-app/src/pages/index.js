import React from "react"
import { Layout, Reader } from "../components"

export default function headlines() {
  return (
    <Layout pagePath="/">
      <Reader country="gb" />
    </Layout>
  )
}
