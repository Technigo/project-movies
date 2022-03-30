import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const FilmList = ({films}) => {
    return(
        <Main>
        {films.map((film) => {
        return(
        <Link to={`/movies/${film.id}`} key={film.id}>
        <Filmcard>
            <FilmImageGroup>
                <CardImage className="card-image" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                <FilmImageOverlay></FilmImageOverlay>
                <FilmTextOverlay>
                    <FilmTitle>{film.title}</FilmTitle>
                    <h3>Released {film.release_date}</h3>
                </FilmTextOverlay>
            </FilmImageGroup>
        </Filmcard>
        </Link>
        )
        })}
        </Main>
    )
}

export default FilmList

// Styled Components
const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const Filmcard = styled.div`
  width: 100%;
  height: 100%;
`

// NEEDS HOVER
const FilmImageOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: 0.5s ease;
  background: transparent;
`

const FilmTextOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: transparent;
  padding: 20px;
`

const FilmImageGroup = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;

  &:hover ${FilmImageOverlay} {
    background: rgba(0, 0, 0, 0.7);
  }

  &:active ${FilmImageOverlay} {
    background: rgba(0, 0, 0, 0.7);
  }

  &:hover ${FilmTextOverlay} {
    color: white;
  }

  &:active ${FilmTextOverlay} {
    color: white;
  }

`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const FilmTitle = styled.h2`
  hyphens: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
`