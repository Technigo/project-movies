import styled from "styled-components"

export const Background = styled.div `
  background-image: url(${props => props.backgroundUrl});
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`