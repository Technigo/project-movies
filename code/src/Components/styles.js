import styled from 'styled-components'

export const MovieListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const MovieCover = styled.div`
  width: 100%;
  position: relative;
`
export const HoverCoverBackground = styled.div`
position: absolute;
width: 100%;
height: 100%;
z-index: 2;
&:hover {
  background: rgba(0, 0, 0, 0.7)
}
`
export const MovieBackground = styled.div`
  min-height: 100vh;
  background-size: cover;
  background-image: ${({ path }) => `url(https://image.tmdb.org/t/p/w1280${path})`}
`
export const H1 = styled.h1`
opacity: 0;
&:hover {
  opacity: 1
}
`
