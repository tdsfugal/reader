import React from "react"
import { Layout, Reader } from "../components"

export default function Science() {
  return (
    <Layout pagePath="/science">
      <Reader country="gb" category="science" />
    </Layout>
  )
}
