import React from "react"
import { Layout, Reader } from "../components"

export default function general() {
  return (
    <Layout pageName="General">
      <Reader country="gb" category="general" />
    </Layout>
  )
}
