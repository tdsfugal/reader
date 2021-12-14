import React from "react"

import { PhotoView } from "../../styles"

const Photo = ({ url }) => {
  if (url) {
    // NOTE - this is pretty lame image presentation. The aspect ratio is not
    // preserved, the fidelity is sub-optimal, etc.  Good enough for now, but
    // would need some serious upgrades for professional use.
    return (
      <PhotoView>
        <img style={{ height: "100%", width: "100%" }} src={url} alt="new" />
      </PhotoView>
    )
  } else {
    return null
  }
}

export default Photo
