import styled, { css } from "styled-components"

export const Button = styled.button`
  background-color: ${(props) => (props.cta ? "green" : "blue")}
  border-radius: 8px;
  color: white;
  font-size: 30px;
  padding: 8px 16px;

  &:hover {
    background-color: red;
  }

  ${(props) =>
    props.outlined &&
    css`
      background-color: transparent;
      border: 2px solid;
      color: black;
    `}
`
