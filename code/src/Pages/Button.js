import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonText = styled.h3`
  color: white;
  font-size: 20px;
  margin: 0;
`;

const BackButton = styled.button`
  position: fixed;
  top: 60px;
  left: 5%;
  padding: 0;
  z-index: 2;
  border: none;
  background-color: transparent;
  &: hover ${ButtonText} {
    transform: translateX(4px);
    transition: all 0.3s ease-in-out;
    display: flex;
  }
`;

const ButtonWrap = styled.div`
  width: 30px;
  margin-right: 10px;
`;

const Button = () => {
  return (
    <div>
      <ButtonWrap>
        <BackButton>
          <Link to={`/`}>
            <ButtonText>‹ Go Back</ButtonText>
          </Link>
        </BackButton>
      </ButtonWrap>{" "}
    </div>
  );
};

export default Button;
