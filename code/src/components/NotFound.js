import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const NotFoundContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
      margin: 20px;
  }
`


const NotFound = () => {
    const navigate = useNavigate();
    const onHomeButtonClick = () => {
        navigate('/')
    }
    return (
        <NotFoundContainer>
            <p>This page doesn't exist</p>
            <button onClick={onHomeButtonClick}>Return to home page</button>
        </NotFoundContainer>
    )
}

export default NotFound;