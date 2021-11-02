import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

export const MovieListItem = ({ movie, imageInformation }) => {
  const [imageOpacityStyle, setImageOpacityStyle] = useState({ opacity: 1 });
  const [textDivStyle, setTextDivStyle] = useState({ diplay: "none" });
  console.log(imageInformation);
  const imagePath = `${imageInformation.base_url}${imageInformation.poster_sizes[6]}${movie.poster_path}`;

  return (
    <>
      <Link to={`/movies/${movie.id}`}>
        <PosterContainer
          onMouseEnter={() => {
            setImageOpacityStyle({ opacity: 0.25 });
            setTextDivStyle({ display: "flex" });
          }}
          onMouseLeave={() => {
            setImageOpacityStyle({ opacity: 1 });
            setTextDivStyle({ diplay: "none" });
          }}
        >
          <TextContainer style={textDivStyle}>
            <h1>{movie.title}</h1>
            <span>Release date: {movie.release_date}</span>
          </TextContainer>
          <PosterContainerImage
            src={imagePath}
            alt={`poster for ${movie.original_title}`}
            style={imageOpacityStyle}
          ></PosterContainerImage>
        </PosterContainer>
      </Link>
    </>
  );
};
