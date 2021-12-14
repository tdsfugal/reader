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

export default function Header({ pageName }) {
  // Each tile is a navigation button
  const tiles = NAV_DEFS.map(({ name, path }) => (
    <NavTileView
      key={name}
      active={pageName === name}
      onClick={() => navigate(path)}
    >
      {name}
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
