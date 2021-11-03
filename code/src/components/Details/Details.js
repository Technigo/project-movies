import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

// -------------------css---------------------------
const TextContainer = styled.div`
  color: white;
`;

export const Details = ({ imageInformation }) => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  //  console.log(imageInformation);
  //    const imagePath =
  //    imageInformation.base_url + // imageInformation.poster_sizes[6];

  const imagePath = (poster_path) => {
    return (
      imageInformation.base_url + imageInformation.poster_sizes[3] + poster_path
    );
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=691b1dc74bbdcd3de3d91c33c77fd858`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovieDetail(json);
        setLoading(false);
      });
  }, [movieId]);

  return (
    !loading && (
      <TextContainer>
        <h1>Title: {movieDetail.title}</h1>
        <img src={imagePath(movieDetail.poster_path)} />
        <p>overview: {movieDetail.overview}</p>
        <p>release date: {movieDetail.release_date}</p>
        <p>Runtime: {movieDetail.runtime}</p>
        <p>Budget: {movieDetail.budget}</p>
      </TextContainer>
    )
  );
};
