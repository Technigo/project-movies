import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MovieContainer, MovieWrapper, MovieImage, MovieOverlay, MovieTitle } from "styles";

import { BASE_URL } from "utils/urls";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <MovieContainer>
      {movies.map((movie) => (
        <MovieWrapper>
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieImage
              key={movie.title}
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt="movie posters"
            ></MovieImage>
            <MovieOverlay>
              <MovieTitle>{movie.title}</MovieTitle>
              <p>Released {movie.release_date}</p>
            </MovieOverlay>
          </Link>
        </MovieWrapper>
      ))}
    </MovieContainer>
  );
};

export default MovieList;
