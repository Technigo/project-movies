import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

//Tried styled components
const ButtonNotFound = styled.button`
  position: absolute;
  left: 50px;
  top: 50px;
  background: transparent;
  border: none;
  color: #fff;
  font-weight: 700;
  padding: 5px;
`;

const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotFound = () => {
  const history = useHistory();

  const onHomePageRedirect = () => {
    history.push('/');
  };

  return (
    <NotFoundDiv>
      <h2>Sorry this page doesn't exist :(</h2>
      <ButtonNotFound onClick={onHomePageRedirect}>
        <span className="back-arrow">&#60;</span>BACK TO MOVIES LIST
      </ButtonNotFound>
    </NotFoundDiv>
  );
};

export default NotFound;
