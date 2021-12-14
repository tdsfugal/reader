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
        <ContentInstructionView>Read more!</ContentInstructionView>
        <ContentTextView>{`${text} ...`}</ContentTextView>
      </ContentView>
    )
  } else {
    return (
      <ContentView>
        <ContentInstructionView>Read more!</ContentInstructionView>
      </ContentView>
    )
  }
}

export default Content
