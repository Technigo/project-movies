import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import arrow from "images/arrow.png"
import { SINGLE_MOVIE_URL } from "utils/urls";
import { 
  Poster, 
  MovieDetailsContainer, 
  MovieDetailsWrapper, 
  MovieDetail, 
  Rating, 
  MovieDescription, 
  BackButton,
  BackArrow,
  ButtonText
} from "styles";

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
      .then((data) => setMovies(data))
      .catch(error => console.error(error))
  }, [movieId]);

  return (
    <MovieDetailsContainer url={movies.backdrop_path ? `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` : ''} >
      <BackButton onClick={onBackButtonClick}>
        <BackArrow src={arrow} alt="back arrow icon"></BackArrow>
        <ButtonText>Movies</ButtonText>
      </BackButton>
      <MovieDetailsWrapper>
        <Poster
          key={movies.title}
          src={movies.poster_path ? `https://image.tmdb.org/t/p/w300${movies.poster_path}` : ''}
          alt="movie posters"
        ></Poster>
        <MovieDetail>
          <h1>
            {movies.title} <Rating>{movies.vote_average}/10</Rating>
          </h1>
          <MovieDescription>{movies.overview}</MovieDescription>
        </MovieDetail>
      </MovieDetailsWrapper>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
