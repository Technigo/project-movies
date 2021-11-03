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
  position: absolute;
  top: 50px;
  left: 50px;
  border: none;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  &: hover ${ButtonTextStyled} {
    transform: translateX(3px);
    transition: all 0.5s ease-out;
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
