import React from "react"
import { Layout, Reader } from "../components"

export default function Business() {
  return (
    <Layout pagePath="/business">
      <Reader country="gb" category="business" />
    </Layout>
  )
}
