import styled from "styled-components/macro";

export const Background = styled.div `
  background-image: url(${props => props.backgroundUrl});
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;

  @media (min-width: 667px) {
    justify-content: flex-end;
  } 
`