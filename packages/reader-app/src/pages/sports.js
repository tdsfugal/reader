import React from "react"
import { Layout, Reader } from "../components"

export default function Sports() {
  return (
    <Layout pageName="Sports">
      <Reader country="gb" category="sports" />
    </Layout>
  )
}
