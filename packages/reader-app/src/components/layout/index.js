import React from "react"

import { LayoutView, WorkspaceView } from "../../styles"

import Header from "./header"

export default function Layout({ children, pageName }) {
  return (
    <LayoutView>
      <Header pageName={pageName} />
      <WorkspaceView>{children}</WorkspaceView>
    </LayoutView>
  )
}
