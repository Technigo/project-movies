import React from "react";
import Select from "./Select"
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainerStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding-top: 140px;

  @media (min-width: 768px) {
    padding-top: 80px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
`;

const TextContainerStyled = styled.div`
  height: 100px;
  color: white;
  text-decoration: none;
  position: absolute;
  bottom: 0;
  padding: 20px;
  display: none;
  flex-direction: column;
  justify-content: flex-end;
`;

const MovieContainer = styled.div`
  position: relative;
  width: 50%;

  @media (min-width: 768px) { 
    width: 25%;
  } 
  @media (min-width: 1024px) { 
    &:hover ${Overlay} {
      display: flex;
    }
    &:hover ${TextContainerStyled} {
      display: flex;
    }
  }
`;

const ImageStyled = styled.img`
  width: 100%;
`;

const MovieTitleStyled = styled.h3`
  font-size: 30px;
  margin: 0;
  margin-bottom: 15px;
`;

const ReleaseDateStyled = styled.p`
  font-size: 17px;
  margin: 0;
  margin-bottom: 15px;
`;

const MovieList = ({ movie, select, setSelect }) => {
  return (
    <>
      <Select 
        select={select}
        setSelect={setSelect}
      /> 
      <MainContainerStyled>
        {movie.map((movie) => (
          <MovieContainer
            key={movie.id}>
            <Link
              to={`/details/${movie.id}`}
              className="movie-container"
            >
              <Overlay />
              <ImageStyled
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
              />
              <TextContainerStyled>
                <MovieTitleStyled>{movie.title}</MovieTitleStyled>
                <ReleaseDateStyled>
                  Released: {movie.release_date}
                </ReleaseDateStyled>
              </TextContainerStyled>
            </Link>
          </MovieContainer>
        ))}
      </MainContainerStyled>
    </>
  );
};

export default MovieList;
