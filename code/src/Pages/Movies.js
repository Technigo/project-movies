import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MovieCard = styled.div`
  background-color: black;
`;

const Info = styled.div`
  display: block;
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
      <main>
        {movie.map((movie) => (
          <MovieCard key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              {" "}
              <Info>
                <Title>{movie.title}</Title>
                <Released>Date released: {movie.release_date}</Released>
              </Info>
            </Link>
          </MovieCard>
        ))}
      </main>
      ; )
    </>
  );
};

// API key for The Movie Data Base: 3d84d8a2e7d9f4fcf68bb05afb8dd7ef //
