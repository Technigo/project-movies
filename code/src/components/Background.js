import styled from "styled-components"

export const Background = styled.div `
  background-image: url(${props => props.backgroundUrl});
  min-height: 100vh;
  display: flex;
  background-size: cover;
  flex-direction: column;
  justify-content: flex-end;

`