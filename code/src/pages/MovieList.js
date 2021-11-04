import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SiteContainer = styled.section `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const ListItems = styled.article `
  min-width: 25%;
  margin: 5px;
  position: relative;
  color: #fff;
  text-decoration: none;
`
const StyledImg = styled.img `
  width: 100%;
  border-radius: 2px;
`
const OverlayDiv = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  height: 100%;
  width: 100%;
  transition: 0.5s ease;
  background-color: #000000bb;

  &:hover {
    opacity: 1;
    fill: rgb(255, 255, 255);
  }
`
const TitleH2 = styled.h2 `
  position: absolute;
  bottom: 20px;
  left: 10px;
  color: #fff;
  font-size: 36px;
  font-weight: 700;
`
const ReleaseP = styled.p `
  position: absolute;
  bottom: 5px;
  left: 10px;
  color: #fff;
  font-size: 18px;
`

const MovieList = ({ movies }) => {
  return (
    <SiteContainer>
      {movies.map((movie) => ( 
        <ListItems
          key ={movie.id}>
          <Link to = {`/movies/${movie.id}`}>  
            <div>
              <StyledImg src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
            </div>  
            <OverlayDiv>
              <TitleH2>{movie.title}</TitleH2>
              <ReleaseP>Released {movie.release_date}</ReleaseP>
            </OverlayDiv>
          </Link>
        </ListItems>  
      ))}
    </SiteContainer>
  )
}

export default MovieList