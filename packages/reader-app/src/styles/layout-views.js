import styled from "@emotion/styled"

export const LayoutView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`

export const WorkspaceView = styled.main`
  flex: 1 0 94vh;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  background-color: #ddd;
  color: white;
`
