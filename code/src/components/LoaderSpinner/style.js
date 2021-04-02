import styled from 'styled-components';

import { spinAnimation, fadeGrowAnimation } from './animation';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  position: relative;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  animation: ${spinAnimation} 2.5s infinite linear;
`;

export const Dot = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${spinAnimation} 2s infinite ease-in-out;

  &::before {
    content: '';
    display: block;
    width: 25%;
    height: 25%;
    background: var(--primary);
    border-radius: 100%;
    animation: ${fadeGrowAnimation} 2s infinite ease-in-out;
  }

  &:nth-child(1) {
    animation-delay: -1.1s;
  }
  &:nth-child(2) {
    animation-delay: -0.9s;
  }
  &:nth-child(3) {
    animation-delay: -0.8s;
  }
  &:nth-child(4) {
    animation-delay: -0.7s;
  }
  &:nth-child(5) {
    animation-delay: -0.6s;
  }
  &:nth-child(6) {
    animation-delay: -0.5s;
  }

  &:nth-child(1)::before {
    animation-delay: -1.1s;
  }
  &:nth-child(2)::before {
    animation-delay: -0.9s;
  }
  &:nth-child(3)::before {
    animation-delay: -0.8s;
  }
  &:nth-child(4)::before {
    animation-delay: -0.7s;
  }
  &:nth-child(5)::before {
    animation-delay: -0.6s;
  }
  &:nth-child(6)::before {
    animation-delay: -0.5s;
  }
`;
