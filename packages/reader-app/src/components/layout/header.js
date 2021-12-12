import React from "react"
import { navigate } from "gatsby"

import {
  HeaderView,
  LogoView,
  NavView,
  NavTileView,
  UserView,
} from "../../styles"

const TILE_DEFS = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "News",
    path: "/news",
  },
]

export default function Header({ pagePath }) {
  // Each tile is a navigation button
  const tiles = TILE_DEFS.map(({ label, path }) => (
    <NavTileView active={pagePath === path} onClick={() => navigate(path)}>
      {label}
    </NavTileView>
  ))

  return (
    <HeaderView>
      <LogoView>FO</LogoView>
      <NavView>{tiles}</NavView>
      <UserView>Guest</UserView>
    </HeaderView>
  )
}
