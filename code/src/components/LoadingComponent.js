import React from 'react'
import styled from 'styled-components'

const LoadingContainerStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(129, 0, 52);
`

const SpinnerStyled = styled.div`
  position: relative;
  top: 40%;
  width: 200px;
  margin: 0 auto;
  border: 7px solid rgb(255, 246, 0);
  height: 200px;
  border-radius: 50%;
  border-left: 5px solid black;
  animation: spin infinite 1s linear;

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const LoadingComponent = () => {
  return (
    <LoadingContainerStyled>
      <SpinnerStyled />
    </LoadingContainerStyled>
  )
}

export default LoadingComponent
