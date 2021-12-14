import React from "react"
import { Layout, Reader } from "../components"

export default function general() {
  return (
    <Layout pagePath="/general">
      <Reader country="gb" category="general" />
    </Layout>
  )
}
