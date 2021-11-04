import React from "react"
import styled, { keyframes } from "styled-components"


const SpinnerAnimation = keyframes `
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`
const ContainerDiv = styled.div `
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SpinnerDiv = styled.div `
  height: 80px;
  width: 80px;
  border: solid 8px #eee;
  border-bottom-color: red;
  border-radius: 50%;
  animation-name: ${SpinnerAnimation};
  animation-duration: 2s;
  animation-timing-function: linear;
  animation iteration-count: infinite;
`

const Spinner = () => {
  return (
    <ContainerDiv>
      <SpinnerDiv />
    </ContainerDiv>
  )
}


export default Spinner