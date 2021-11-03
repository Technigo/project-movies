import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

// -------------------css---------------------------
const TextContainer = styled.div`
  color: white;
`;

export const Details = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  return (
    <TextContainer>
      <h1>Hej på dig du!</h1>
      <h2>Du är ett litet troll! </h2>
    </TextContainer>
  );
};
