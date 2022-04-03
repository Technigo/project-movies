import styled from 'styled-components'


export const AllMoviesFlexContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  position: relative
`

export const DetailsContainer = styled.div`
width: 100vw;
position: relative;
background-position: 50% 50%;
top: 0;
left: 0;
background-image: ${(props) => (props.url)};

& > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}
`