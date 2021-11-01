import styled from "styled-components";

export const OverLay = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.2s ease;
  &:hover {
    display: flex;
    z-index: 1;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.75);
  }
`;
