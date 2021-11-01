import styled from "styled-components";

import { SharedStyles } from "./SharedStyles";

export const OverLay = styled.div`
  ${SharedStyles}
  position: absolute;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  opacity: 0;
  transition: opacity 0.2s ease;

  &:hover {
    z-index: 1;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;
