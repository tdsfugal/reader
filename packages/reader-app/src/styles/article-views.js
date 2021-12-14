import styled from "@emotion/styled"

export const ArticlesView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  overflow-y: scroll;
  background-color: #fff;
`

export const ArticleView = styled.div`
  flex: 0 0 400px;
  height: 350px;
  display: flex;
  margin: 1em;
  flex-flow: column nowrap;
  align-content: end;
  justify-content: end;
  background-color: #eee;
  box-shadow: 0.3em 0.2em 1em #abb;
  color: #342;
`
// ======== Upper ======================================

export const UpperArticleView = styled.div`
  flex: 0 0 75%;
  width: 100%;
`

export const PhotoView = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const ContentView = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

export const ContentTextView = styled.div`
  flex: 0 0 30%;
  padding: 1em;
  width: 70%;
  text-size: 1em;
  line-height: 1em;
  background-color: #fff;
  color: #000;
  font-family: times;
`

export const ContentInstructionView = styled.div`
  flex: 0 0 2em;
  line-height: 2em;
  font-family: verdana;
  font-weight: bold;
  color: #55f;
  font-size: 2em;
`

// ======== Lower =============================================

export const LowerArticleView = styled.div`
  flex: 0 0 25%;
  width: 100%;
  background-color: #eee;
  color: #342;
`

export const HeadlineView = styled.div`
  flex: 1 1 25%;
  width: 100%-2em;
  font-family: helvetica;
  font-size: 1em;
  line-height: 1em;
  text-align: left;
  margin: 0.4em 1em 0.5em 0.6em;
`
export const DatelineView = styled.span`
  font-family: verdana;
  font-size: 0.8em;
  line-height: 1em;
  font-style: italic;
`

export const TitleView = styled.span`
  font-family: helvetica;
  font-size: 1em;
  line-height: 1em;
  overflow-wrap: break-word;
`

export const BylineView = styled.div`
  flex: 0 0 7%;
  width: 100%;
  margin: 0.3em 0.5em 1em 2em;
  font-family: verdana;
  font-size: 0.7em;
  line-height: 0.7em;
`
