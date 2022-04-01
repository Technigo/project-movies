import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #000;
  color: #fff;
`;

const Title = styled.h1`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1em;
  border-block-end: 2px solid #525252;
  @media (max-width: 667px) {
    font-size: 22px;

    span {
      margin-bottom: 5px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        Popular movie releases{" "}
        <span role="img" aria-label="Emoji">
          🍿
        </span>
      </Title>
    </HeaderContainer>
  );
};

export default Header;
