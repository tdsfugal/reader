import styled from "@emotion/styled"

const HEADER_HEIGHT = "6vh"

export const LayoutView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  background-color: blue;
  color: white;
`

export const HeaderView = styled.header`
  flex: 0 0 ${HEADER_HEIGHT};
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background-color: green;
  color: white;
`

export const LogoView = styled.div`
  flex: 0 0 120px;
  height: ${HEADER_HEIGHT};
  background-color: darkgreen;
  color: white;
  margin: 10px;
  line-height: ${HEADER_HEIGHT};
  font-size: 40px;
  font-family: sans-serif;
  text-align: center;
`

export const UserView = styled.div`
  flex: 0 0 120px;
  height: ${HEADER_HEIGHT};
  background-color: darkgreen;
  color: white;
  margin: 10px;
  line-height: ${HEADER_HEIGHT};
  font-size: 30px;
  font-family: sans-serif;
  text-align: center;
`

export const NavView = styled.nav`
  flex: 1 1 60px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background-color: green;
  color: white;
`

export const NavTileView = styled.div`
  flex: 0 0 140px;
  height: 45px;
  background-color: ${({ active }) => (active ? "lightgray" : "lightgreen")};
  margin: 10px;
  color: white;
  line-height: 45px;
  font-size: 30px;
  font-family: sans-serif;
  text-align: center;
`

export const WorkspaceView = styled.main`
  flex: 1 0 94vh;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background-color: blue;
  color: white;
`
