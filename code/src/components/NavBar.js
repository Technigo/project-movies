import styled from "styled-components";

import { SharedStyles } from "./SharedStyles";

export const NavBar = styled.header`
  ${SharedStyles}
  width: 100%;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.75);
  transition: opacity 0.2s ease;

  &:hover {
    z-index: 1;
    opacity: 0.8;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;
