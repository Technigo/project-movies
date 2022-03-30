import React from "react";
import error from '../assets/error.png'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Error = () => {
    return(
        <ErrorDiv>
            <Link to="/">
                <ErrorImage src={error} alt="circle with x inside" />
            </Link>
            <p>Movie not found!</p>
            <p>Click icon to go back.</p>
        </ErrorDiv>
    )
}

export default Error

const ErrorDiv = styled.div`
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`

const ErrorImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
`