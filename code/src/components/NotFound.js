import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
`;

const NotFoundText = styled.h2`
  color: white;
  text-align: center;
`;

const RedirectButton = styled.button`
  margin-top: 20px;
  padding: 20px;
  border-radius: 30px;
  font-size: 16px;
  width: fit-content;
  &:hover {
    background-color: grey;
  }
`;

const NotFound = () => {
  const history = useHistory();
  const onHomePageRedirect = () => {
    history.push("/");
  };

  return (
    <NotFoundContainer>
      <NotFoundText>Sorry this page doesn't exist</NotFoundText>
      <RedirectButton onClick={onHomePageRedirect}>
        Back to homepage
      </RedirectButton>
    </NotFoundContainer>
  );
};

export default NotFound;
