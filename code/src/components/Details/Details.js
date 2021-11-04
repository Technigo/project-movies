import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export const Details = ({ imageInformation }) => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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
        console.log(json);

        if (json.id) {
          setMovieDetail(json);
        } else {
          setIsError(true);
        }
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  if (!loading && isError) {
    return <Error>Could not find the movie!</Error>;
  }

  if (!loading && !isError) {
    return (
      <TextContainer>
        <h1>{movieDetail.title}</h1>
        <ImgDiv>
          <img src={imagePath(movieDetail.poster_path)} />
        </ImgDiv>
        <h2>overview:</h2>
        <p>{movieDetail.overview}</p>
        <p>
          <strong>release date:</strong> {movieDetail.release_date}
        </p>
        <p>
          <strong>Runtime:</strong> {movieDetail.runtime}min
        </p>
        <p>
          <strong>Budget:</strong> {movieDetail.budget}
        </p>
      </TextContainer>
    );
  }
};

// -------------------css---------------------------
const TextContainer = styled.div`
  color: white;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid white;

  h1 {
    text-align: center;
  }
`;
const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

const Loading = styled.div`
  color: white;
`;

const Error = styled.div`
  color: white;
`;
