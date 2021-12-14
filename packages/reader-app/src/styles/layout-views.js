import styled from "@emotion/styled"

const HEADER_HEIGHT = "6vh"

export const LayoutView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`

export const HeaderView = styled.header`
  flex: 0 0 ${HEADER_HEIGHT};
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background-color: #00693e;
  color: white;
`

export const LogoView = styled.div`
  flex: 0 0 120px;
  height: ${HEADER_HEIGHT};
  background-color: #00693e;
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
  background-color: #00693e;
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
  background-color: #00693e;
  color: white;
`

export const NavTileView = styled.div`
  flex: 0 0 auto;
  height: 30px;
  margin: 1em;
  padding: 0.5em
  background-color: #00693e;
  color: ${({ active }) => (active ? "#def" : "black")};
  line-height: 40px;
  font-size: 18px;
  font-family: Arial;
  font-weight: Bold;
  text-align: center;
`

export const WorkspaceView = styled.main`
  flex: 1 0 94vh;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  color: white;
`
