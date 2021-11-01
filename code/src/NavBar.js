import styled from "styled-components";

export const NavBar = styled.header`
  box-sizing: border-box;
  width: 100%;
  top: 0;
  left: 0;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  padding: 20px;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.75);
  transition: opacity 0.2s ease;
  &:hover {
    display: flex;
    z-index: 1;
    opacity: 0.7;
    background-color: rgba(0, 0, 0, 0.75);
    text-decoration: underline;
  }
`;
