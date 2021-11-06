import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as MyButton } from "../assets/button_back.svg";
import styled from "styled-components";

const ButtonTextStyled = styled.h3`
  color: white;
  font-size: 18px;
  margin: 0;
`;

const BackButtonStyled = styled.button`
  position: fixed;
  top: 90px;
  left: 5%;
  border: none;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  z-index: 4;
  &: hover ${ButtonTextStyled} {
    transform: translateX(4px);
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 768px) {
    top: 110px;
    left: 60px;
  }
`;

const MyButtonStyled = styled.div`
  width: 30px;
  margin-right: 10px;
`;

export const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <BackButtonStyled onClick={goBack}>
        <MyButtonStyled>
          <MyButton />
        </MyButtonStyled>
        <ButtonTextStyled>Movies</ButtonTextStyled>
      </BackButtonStyled>
    </div>
  );
};
