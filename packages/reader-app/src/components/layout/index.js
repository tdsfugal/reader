import React from "react"

import { LayoutView, WorkspaceView } from "../../styles"

import Header from "./header"

export default function Layout({ children, pagePath }) {
  return (
    <LayoutView>
      <Header pagePath={pagePath} />
      <WorkspaceView>{children}</WorkspaceView>
    </LayoutView>
  )
}
