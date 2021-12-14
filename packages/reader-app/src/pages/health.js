import React from "react"
import { Layout, Reader } from "../components"

export default function Health() {
  return (
    <Layout pageName="Health">
      <Reader country="gb" category="health" />
    </Layout>
  )
}
