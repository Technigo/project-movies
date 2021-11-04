import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  opacity: ${(props) => (props.hasPoster ? '0' : '1')};

  &:hover {
    background-color: ${(props) =>
      props.hasPoster ? 'black' : 'rgba(0,0,0,0.5)'};
    opacity: ${(props) => (props.hasPoster ? '0.8' : '1')};
  }
`

const DataStyled = styled.div`
  color: ${(props) => (props.hasPoster ? 'white' : 'black')};
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
          {/* varför har vi backdrop här? Mer rimligt att använda poster?? */}
          {movie.poster_path === null ? (
            <MovieImgStyled src='./assets/nopic2.png' alt='not available/' />
          ) : (
            <MovieImgStyled
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          {/* borde ändra till poster_path här också */}
          <OverlayStyled hasPoster={movie.poster_path !== null}>
            <DataStyled hasPoster={movie.poster_path !== null}>
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
