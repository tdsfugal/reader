import styled from "@emotion/styled"

const HEADER_HEIGHT = "5vh"

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

export const SearchView = styled.input`
  flex: 0 0 120px;
  height: ${HEADER_HEIGHT};
  background-color: #00693e;
  color: white;
  margin: 10px;
  line-height: ${HEADER_HEIGHT};
  font-size: 0.9em;
  font-family: sans-serif;
  text-align: center;
`

export const NavView = styled.nav`
  flex: 1 1 60px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
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
