import React, { useState, useEffect } from "react"
import { useReactiveVar } from "@apollo/client"

import { SearchView } from "../styles"
import { queryKeywordsVar } from "../state"

export default function Search() {
  const queryKeywords = useReactiveVar(queryKeywordsVar)
  const [val, setVal] = useState("")

  // This useEffect keeps the keyword search values visible after page changes.
  useEffect(() => {
    console.log(`Keywords = ${queryKeywords}`)
    if (queryKeywords && queryKeywords.length > 0) {
      setVal(queryKeywords)
    } else {
      setVal("")
    }
  }, [queryKeywords])

  const handleChange = e => {
    e.preventDefault()
    setVal(e.target.value)
  }

  const handleKeyPress = e => {
    console.log(e.charCode)
    if (e.charCode === 13) {
      queryKeywordsVar(e.target.value)
    }
  }

  return (
    <SearchView
      value={val}
      placeholder="Search"
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  )
}
