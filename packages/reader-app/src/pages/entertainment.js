import React from "react"
import { Layout, Reader } from "../components"

export default function entertainment() {
  return (
    <Layout pagePath="/entertainment">
      <Reader country="gb" category="entertainment" />
    </Layout>
  )
}
