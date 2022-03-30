import React from "react";
import styled from 'styled-components'

const LoadingSpinner = () => {
    return (
        <Loader />
    )
}

export default LoadingSpinner

const Loader = styled.div`
  border: 0px;
  border-radius: 50%;
  border-top: 20px solid #3A3845;
  border-bottom: 10px solid #3A3845;
  width: 160px;
  height: 160px;
  -webkit-animation: spin 2s linear infinite; /* For Safari */
  animation: spin 2s linear infinite;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  &:after {
  content: "";
  display: block;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  border-left: 5px solid #3A3845;
  border-right: 5px solid #3A3845;
  opacity: .5; 
  }

  @-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`