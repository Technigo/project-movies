import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { DETAILS_URL } from "./utils.js/Urls";

// Styled Components
const Container = styled.section`
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background: center;
  background-size: cover;
  position: relative;
  padding: 5vw;
  display: grid;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  display: flex;
`;

const Poster = styled.div`
  // display: flex;
  // flex-direction: column;
  margin-bottom: 1em;

  img {
    width: 275px;
    height: auto;
    border: 3px solid #fff;
  }
`;

const MovieInfo = styled.div`
  align-self: flex-end;
  padding: 1em;
  //background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  margin-bottom: 1em;
  margin-left: 1em;
  min-width: 40vw;
  max-width: 55vw;
  height: fit-content;
  // border: 3px solid #fff;

  h1 {
    margin: 0;
    font-size: 36px;
  }

  span {
    font-size: 18px;
    padding-left: 10px;
    font-style: italic;
    font-weight: 400;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

// const MovieButton = styled.button`
//   cursor: pointer;
//   //align-self: flex-start;
//   background-color: rgba(0, 0, 0, 0.5);
//   color: #fff;
//   border: 3px solid #fff;
//   font-size: 20px;
//   padding: 0.5em;
//   width: 180px;
//   transition: all 0.5s;
// `;

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
    <Container
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path})`,
      }}
    >
      <DetailsContainer>
        <button onClick={onMovieButtonClick}>
          <span></span>
          Go back
        </button>
        <InfoContainer>
          <Poster>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`}
              alt={movieDetails}
            />
          </Poster>
          <MovieInfo>
            <h1>
              {movieDetails.title} <span>{movieDetails.vote_average}/10</span>
            </h1>
            <p>{movieDetails.overview}</p>
          </MovieInfo>
        </InfoContainer>
      </DetailsContainer>
    </Container>
  );
};

export default MovieDetails;
