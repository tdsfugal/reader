import React from "react"
import { Layout } from "../components"

export default function NotFoundPage() {
  return (
    <Layout pagePath={null}>
      <div
        style={{
          height: "vh",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Oh, the sadness!</h1>
        <h2>Page not found.</h2>
      </div>
    </Layout>
  )
}
