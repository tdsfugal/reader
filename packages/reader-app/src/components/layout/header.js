import React from "react"

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
    link: "index",
  },
  {
    label: "NewsApi",
    link: "newsapi",
  },
]

export default function Header({ pageName }) {
  const tiles = TILE_DEFS.map(({ label, link }) => (
    <NavTileView active={pageName === link}>{label}</NavTileView>
  ))
  return (
    <HeaderView>
      <LogoView>FO</LogoView>
      <NavView>{tiles}</NavView>
      <UserView>Guest</UserView>
    </HeaderView>
  )
}
