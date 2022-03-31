import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: black;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
`;

const MovieCard = styled.div`
position: relative;
&:hover ${Overlay} {
    display: flex;
}
`;

const Poster = styled.img`
  width: 100%;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 30px;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h1`
  color: white;
  margin: 10px 20px;
  font-size: 20px;
`;

const Released = styled.h3`
  color: white;
  font-size: 14px;
 margin: 0 20px;
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
            <Link to={`/details/${movie.id}`} style={{textDecoration:"none"}}>
              <Poster
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <Overlay />
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
