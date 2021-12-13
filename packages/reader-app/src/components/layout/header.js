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
    label: "Headlines",
    path: "/headlines",
  },
]

export default function Header({ pagePath }) {
  // Each tile is a navigation button
  const tiles = TILE_DEFS.map(({ label, path }) => (
    <NavTileView
      key={label}
      active={pagePath === path}
      onClick={() => navigate(path)}
    >
      {label}
    </NavTileView>
  ))

  return (
    <HeaderView>
      <LogoView key="logo">FO</LogoView>
      <NavView key="nav">{tiles}</NavView>
      <UserView key="user">Guest</UserView>
    </HeaderView>
  )
}
