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
opacity: 0;
width: 100%;
height: 100%;
z-index: 2;
top: 0;
&:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.7)
}
`

export const MovieDescription = styled.div`
position: absolute;
top: 75%;
left: 5%;
color: #fff;
`

export const MovieDetailsDescription = styled.div`
width: 30%;
position: relative;
transition: left 0.5s;
&:hover {
  background: rgba(0, 0, 0, 0.7)
}
&:before {
  content: '';
    position: absolute;
    z-index: 10;
    background-image: -webkit-gradient(linear, left top, right top, from(#000), to(transparent));
    background-image: -webkit-linear-gradient(left, #000, transparent);
    background-image: -moz- oldlinear-gradient(left, #000, transparent);
    background-image: -o-linear-gradient(left, #000, transparent);
    background-image: linear-gradient(to right, #000, transparent);
    top: 0;
    bottom: 0;
    left: 100%;
    width: 275px;
    height: 100%;
    margin: 0;
}
`

export const MovieBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-image: ${({ path }) => `url(https://image.tmdb.org/t/p/w1280${path})`}
`

export const FlexWrapper = styled.div`
 display: flex;
`

export const BackButtonWrapper = styled.div`
 align-items: center;
 width: 30px;
 display: flex;
 alignItems: center;
`
