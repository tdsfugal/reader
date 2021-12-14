import React from "react"

import {
  ContentView,
  ContentTextView,
  ContentInstructionView,
} from "../../styles"

const Content = ({ content }) => {
  if (content) {
    // Break the string into an array of words.  Discard the last 3 mangled ones.
    const words = content.split(" ").slice(0, -3)
    // Reassemble the string without cruff at the end
    const text = words.join(" ")
    return (
      <ContentView>
        <ContentTextView>{`${text} ...`}</ContentTextView>
        <ContentInstructionView>Read more!</ContentInstructionView>
      </ContentView>
    )
  } else {
    return null
  }
}

export default Content
