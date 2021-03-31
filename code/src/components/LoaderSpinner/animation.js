import { keyframes } from 'styled-components';

export const spinAnimation = keyframes`
  100% { transform: rotate(360deg); }
`;

export const fadeGrowAnimation = keyframes`
  0% {
    transform: scale(1.0);
    opacity: 1;
  }
  50% {
    transform: scale(0.4); 
    opacity: 0.2;
  } 
  100% {
    transform: scale(1.0); 
    opacity: 1;
  }
`;
