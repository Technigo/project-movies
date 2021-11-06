import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as MyButton } from "../assets/button_back.svg";

const NotFoundContainer = styled.div`
  padding-top: 140px;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  align-items: center;
`;

const NotFoundText = styled.h2`
  color: white;
  text-align: center;
`;


const MyButtonStyled = styled.div`
  width: 30px;
  margin-right: 10px;
`;

const NotFound = () => {
  const history = useHistory();
  const onHomePageRedirect = () => {
    history.push("/");
  };

  return (
    <NotFoundContainer>
      <NotFoundText>Sorry this page doesn't exist</NotFoundText>
      <MyButtonStyled>
      <MyButton onClick={onHomePageRedirect}>
        Back to homepage
      </MyButton>
      </MyButtonStyled>
    </NotFoundContainer>
  );
};

export default NotFound;
