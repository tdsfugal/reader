import React, { useState } from "react"
import { SearchView } from "../styles"

export default function Search() {
  const [val, setVal] = useState("")

  const handleChange = e => {
    e.preventDefault()
    setVal(e.target.value)
  }

  const handleKeyPress = e => {
    if (e.charCode === 13) {
      console.log("Enter Key Pressed")
      console.log(e.target.value)
      setVal("")
    }
  }

  console.log(val)

  return (
    <SearchView
      value={val}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  )
}
