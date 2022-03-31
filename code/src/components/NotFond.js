import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const StyleNotFond = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #fff;
  }

  p {
    color: #fff;
    font-size: 20px;
    align-self: center;
  }

  button {
    cursor: pointer;
    align-self: center;
  }
`;

const NotFond = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <StyleNotFond>
        <p>Sorry, page not found. Click the button to go back</p>
        <button onClick={onHomeButtonClick}>Homepage</button>
      </StyleNotFond>
    </Container>
  );
};

export default NotFond;
