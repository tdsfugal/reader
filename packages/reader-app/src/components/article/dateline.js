import React from "react"

import { DatelineView } from "../../styles"

const Dateline = ({ date = null, location = null }) => {
  if (location && date) {
    return <DatelineView>{`${location}, ${date} - `}</DatelineView>
  } else if (location) {
    return <DatelineView>{`${location} - `}</DatelineView>
  } else if (date) {
    return <DatelineView>{`${date} - `}</DatelineView>
  } else {
    return null
  }
}

export default Dateline
