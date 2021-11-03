import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MoviesContainerStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
const MovieLinkStyled = styled(Link)`
  text-decoration: none;
  position: relative;
`

const MovieImgStyled = styled.img`
  width: 100%;
  height: 100%;
`

const OverlayStyled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;

  &:hover {
    background-color: black;
    opacity: 0.8;
  }
`

const DataStyled = styled.div`
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 10px;
  padding-bottom: 30px;
`
const TitleStyled = styled.h1`
  font-size: 2em;
  margin: 0;
`
const DateStyled = styled.p`
  font-size: 1em;
`

const MovieList = ({ list }) => {
  return (
    <MoviesContainerStyled>
      {list.map((movie) => (
        <MovieLinkStyled to={`/movie/${movie.id}`} key={movie.id}>
          {movie.backdrop_path === null ? (
            <MovieImgStyled src='./assets/nopic2.png' alt='not available/' />
          ) : (
            <MovieImgStyled
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          <OverlayStyled>
            <DataStyled>
              <TitleStyled>{movie.title}</TitleStyled>
              <DateStyled>Released {movie.release_date}</DateStyled>
            </DataStyled>
          </OverlayStyled>
        </MovieLinkStyled>
      ))}
    </MoviesContainerStyled>
  )
}

export default MovieList
