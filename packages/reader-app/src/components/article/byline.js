import React from "react"

import { BylineView } from "../../styles"

const Byline = ({ author = null }) => {
  if (author) {
    return <BylineView>{`  -- ${author}`}</BylineView>
  } else {
    return <BylineView />
  }
}

export default Byline
