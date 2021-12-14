import React from "react"
import { ApolloProvider } from "@apollo/client"

import { client } from "../../state"

import { LayoutView, WorkspaceView } from "../../styles"

import Header from "./header"

// Every page component uses a Layout as a root component.  Therefore this
// is the logical place for providers and other root-of-the-tree components.
export default function Layout({ children, pageName }) {
  return (
    <ApolloProvider client={client}>
      <LayoutView>
        <Header key="header" pageName={pageName} />
        <WorkspaceView key="workspace">{children}</WorkspaceView>
      </LayoutView>
    </ApolloProvider>
  )
}
