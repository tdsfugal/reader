import React from "react"
import { Layout, Reader } from "../components"

export default function Health() {
  return (
    <Layout pagePath="/health">
      <Reader country="gb" category="health" />
    </Layout>
  )
}
