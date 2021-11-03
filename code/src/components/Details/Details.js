<<<<<<< HEAD
import React from "react";
import { useEffect, useState } from "react";
=======
import React, { useState } from "react";
>>>>>>> 91e915ac4f2a85d40bd28f19e9deb98d2b97c698
import styled from "styled-components";
import { useParams } from "react-router-dom";

// -------------------css---------------------------
const TextContainer = styled.div`
  color: white;
`;

export const Details = ({ imageInformation }) => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=691b1dc74bbdcd3de3d91c33c77fd858`
    )
      .then((res) => res.json())
      .then((json) => setMovieDetail(json));
  }, [movieId]);

  /*  const imagePath = `${imageInformation.base_url}${imageInformation.poster_sizes[6]}`; */

  return (
    <TextContainer>
      <h1>Title: {movieDetail.title}</h1>
      {/* <img src={imagePath.poster_path} /> */}
      <p>overview: {movieDetail.overview}</p>
      <p>release date: {movieDetail.release_date}</p>
      <p>Runtime: {movieDetail.runtime}</p>
      <p>Budget: {movieDetail.budget}</p>
    </TextContainer>
  );
};
