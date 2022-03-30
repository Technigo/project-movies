import React, { useState, useEffect } from "react";
import { useParams, Link  } from "react-router-dom";
import { API_KEY, MOVIE_DETAILS_URL } from "../utils/urls";
import styled from 'styled-components'
import { FiChevronLeft } from "react-icons/fi";

const DetailsContainer = styled.div`
  min-height: 100vh;
  background: center center;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
`;

const Button = styled.button`
  position: absolute;
  display: inline-flex;
  color: #fff;
  background: #000;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid #fff;
  padding: 5px 20px;
  left: 17px;
  top: 17px;
  text-transform: uppercase;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  svg {
    position: relative;
    top: 50%;
    left: 0%;
    transform: translate(-50%, 25%);
  }
  @media (min-width: 767px) {
    font-size: 18px;
  }
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const MovieDetailsSummary = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 90%;
  img {
    width: 200px;
    height: auto;
    border-radius: 10px;
  }
  @media (min-width: 767px) {
    flex-direction: row;
    img{
      height: 50vh;
      width: auto;
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    img{
      height: 50vh;
      width: auto;
    }
  }
`;

const MovieDetailsText = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  color: #fff;
  @media (min-width: 767px) {
    padding-left: 2rem;
  }
  @media (min-width: 1024px) {
    padding-left: 3rem;
  }
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(MOVIE_DETAILS_URL(API_KEY, movieId))
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [movieId]);

  return (
    <section>
      {details.backdrop_path && (
        <DetailsContainer style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/original${details.backdrop_path})`,
          }}
        >
          <Link to="/">
            <Button >
            <FiChevronLeft />
              <span>Back to Movies</span>
            </Button>
          </Link>
          <MovieDetailsSummary>
            <img
              className="movie-details-poster"
              src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`}
              alt={details.title}
            />
            <MovieDetailsText className="movie-details-text">
              <h1>
                {details.title}
                <span className="vote-average"> {details.vote_average}/10</span>
              </h1>
              <p>{details.overview}</p>
            </MovieDetailsText>
          </MovieDetailsSummary>
        </DetailsContainer>
      )}
    </section>
  );
};

export default MovieDetails