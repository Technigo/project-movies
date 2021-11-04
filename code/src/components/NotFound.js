import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ButtonNotFound = styled.button`
  background: #fff;
  color: black;
  border: none;
  padding: 8px;
  border-radius: 10px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-weight: bold;
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
        Back to movies list
      </ButtonNotFound>
    </NotFoundDiv>
  );
};

export default NotFound;
