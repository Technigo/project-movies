import styled, { keyframes } from "styled-components";

const spin = keyframes`
{
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }}
`;

export const Loader = styled.div`
  border: 16px solid whitesmoke;
  border-top: 16px solid ${(props) => props.color};
  border-radius: 50%;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  animation: ${spin} 1s linear infinite;
`;
