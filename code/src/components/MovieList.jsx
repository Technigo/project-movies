import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  background-color: #000;
`;

const MovieCardContainer = styled.div`
  position: relative;
  &:hover{
    opacity: 1;
  }
  img {
    width: 100%;
    height: 100%;
  }
  a {
    display: flex;
  }
  @media (min-width: 767px) {
    width: 50%;
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: 25%;
    height: 100%;
  }
`;

const MovieCardOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: 0.5s ease;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  padding: 1.5rem;
  box-sizing: border-box;
  &:hover{
    opacity: 1;
  }
`;

const MovieCardText = styled.div`
  justify-content: flex-start;
  align-self: flex-end;
  color: #fff;
`;

const MovieTitle = styled.div`
  font-size: 2rem;
`;

const MovieReleaseText = styled.div`
  font-size: 1rem;
`;


const MovieList = ({ movies }) => {
  return (
    <ListContainer>
      {movies.map((movie) => (
        <MovieCardContainer key={movie.original_title}>
          <Link to={`/details/${movie.id}`} key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt="movie poster">
            </img>
            <MovieCardOverlay>
              <MovieCardText>
                <MovieTitle>{movie.original_title}</MovieTitle>
                <MovieReleaseText>Released {movie.release_date}</MovieReleaseText>
              </MovieCardText>
            </MovieCardOverlay>
          </Link>
        </MovieCardContainer>
      ))}
    </ListContainer>
  );
};

export default MovieList