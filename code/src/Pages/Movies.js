import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const MovieCard = styled.div`
  background-color: #191919;
`;

const Poster = styled.img`
  width: 100%;
  position: relative;

  &:hover {
    opacity: 0.5;
  }
`;

const Info = styled.div`
  display: block;
  position: absolute;
`;

const Title = styled.h1`
  color: white;
`;

const Released = styled.h3`
  color: white;
`;

export const Movies = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=3d84d8a2e7d9f4fcf68bb05afb8dd7ef&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => setMovie(data.results));
  }, []);

  return (
    <>
      <Main>
        {movie.map((movie) => (
          <MovieCard key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <Poster
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <Info>
                <Title>{movie.title}</Title>
                <Released>Date released: {movie.release_date}</Released>
              </Info>
            </Link>
          </MovieCard>
        ))}
      </Main>
    </>
  );
};

// API key for The Movie Data Base: 3d84d8a2e7d9f4fcf68bb05afb8dd7ef //
