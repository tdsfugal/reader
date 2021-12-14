import React, { useState } from "react"

import { SearchView } from "../styles"
import { queryKeywordsVar } from "../state"

export default function Search() {
  const [val, setVal] = useState("")

  const handleChange = e => {
    e.preventDefault()
    setVal(e.target.value)
  }

  const handleKeyPress = e => {
    if (e.charCode === 13) {
      queryKeywordsVar(e.target.value)
      setVal("")
    }
  }

  return (
    <SearchView
      value={val}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  )
}
