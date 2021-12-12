import React from "react"

import { LayoutView, WorkspaceView } from "../../styles"

import Header from "./header"

export default function Layout({ children, pagePath }) {
  return (
    <LayoutView>
      <Header key="header" pagePath={pagePath} />
      <WorkspaceView key="workspace">{children}</WorkspaceView>
    </LayoutView>
  )
}
