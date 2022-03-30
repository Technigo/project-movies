import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { SINGLE_MOVIE_URL } from "utils/urls";
import { Poster, MovieDetailsContainer, MovieDetailsWrapper, MovieDetail, Rating } from "styles";

const MovieDetails = () => {
  const [movies, setMovies] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(SINGLE_MOVIE_URL(movieId))
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, [movieId]);

  return (
    <MovieDetailsContainer>
      <button onClick={onBackButtonClick}>Movies</button>
      <MovieDetailsWrapper>
        <Poster
          key={movies.title}
          src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`}
          alt="movie posters"
        ></Poster>
        <MovieDetail>
          <h1>
            {movies.title} <Rating>{movies.vote_average}/10</Rating>
          </h1>
          <p>{movies.overview}</p>
        </MovieDetail>
      </MovieDetailsWrapper>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
