import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// -------------------css---------------------------
const PosterContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PosterContainerImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  z-index: 10;
  color: white;
  justify-content: flex-end;
  flex-direction: column;
  padding: 20px;
`;

// onMouseEnter and onMouseLeave we set isMouseOver to true or false which we can use to change the opacity and the display style.
// We also make a imagePath variable to get the path to the poster image. Finally we create some content that is displayed.

export const MovieListItem = ({ movie, imageInformation }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  console.log(imageInformation);
  const imagePath = `${imageInformation.base_url}${imageInformation.poster_sizes[6]}${movie.poster_path}`;

  console.log(imageInformation.base_url);
  return (
    <>
      <Link to={`/details/${movie.id}`}>
        <PosterContainer
          onMouseEnter={() => {
            setIsMouseOver(true);
          }}
          onMouseLeave={() => {
            setIsMouseOver(false);
          }}
        >
          <TextContainer
            style={isMouseOver ? { display: "flex" } : { display: "none" }}
          >
            <h1>{movie.title}</h1>
            <span>Release date: {movie.release_date}</span>
          </TextContainer>
          <PosterContainerImage
            src={imagePath}
            alt={`poster for ${movie.original_title}`}
            style={isMouseOver ? { opacity: 0.25 } : { opacity: 1 }}
          ></PosterContainerImage>
        </PosterContainer>
      </Link>
    </>
  );
};
