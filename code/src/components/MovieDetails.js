import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { DETAILS_URL } from "./utils.js/Urls";

const Container = styled.section`
  display: flex;
`;

const DetailsContainer = styled.div`
  min-height: 100vh;
  background: center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 2.5em;
`;

const Poster = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  img {
    width: 275px;
    height: auto;
    border: 3px solid #fff;
  }
`;

const MovieInfo = styled.div`
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  margin-bottom: 1em;
  margin-left: 1em;
  min-width: 40vw;
  max-width: 55vw;
  height: fit-content;
  border: 3px solid #fff;
  h1 {
    margin: 0;
  }
  span {
    font-size: 16px;
    padding-left: 10px;
  }
`;

const MovieButton = styled.button`
  align-self: flex-start;
  background: transparent;
  border: none;
  font-size: 16px;
`;

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movie_id } = useParams();
  const navigate = useNavigate();

  const onMovieButtonClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(DETAILS_URL(movie_id))
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
      });
  }, [movie_id]);

  return (
    <Container>
      <DetailsContainer
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path})`,
        }}
      >
        <MovieButton onClick={onMovieButtonClick}>Back to movies</MovieButton>
        <Poster>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails}
          />
        </Poster>
        <MovieInfo>
          <h1>
            {movieDetails.title} <span>{movieDetails.vote_average}/10</span>
          </h1>
          <p>{movieDetails.overview}</p>
        </MovieInfo>
      </DetailsContainer>
    </Container>
  );
};

export default MovieDetails;
