import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyleNotFond = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: white;
    font-size: 20px;
    align-self: center;
  }

  button {
    align-self: center;
  }
`;

const NotFond = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate("/");
  };

  return (
    <StyleNotFond>
      <p>Sorry, page not found. Click the button to go back to homepage</p>
      <button onClick={onHomeButtonClick}>Homepage</button>
    </StyleNotFond>
  );
};

export default NotFond;
