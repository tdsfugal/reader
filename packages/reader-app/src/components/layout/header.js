import React from "react"
import { navigate } from "gatsby"
import NAV_DEFS from "./nav-defs"

import {
  HeaderView,
  LogoView,
  NavView,
  NavTileView,
  UserView,
} from "../../styles"

export default function Header({ pagePath }) {
  // Each tile is a navigation button
  const tiles = NAV_DEFS.map(({ label, path }) => (
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
