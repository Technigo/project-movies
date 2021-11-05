import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { API_LIST } from 'utils/urls'

const MoviesContainerStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const ArrowStyled = styled.span`
  font-size: 30px;
  margin-right: 5px;
  margin-left: 20px;
`
// when hover over the DetailLink we want to change the styling for ArrowStyled
const ListLinkStyled = styled(Link)`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 30px 8px 6px 8px;
  border-radius: 10px;

  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: white;

  &:hover ${ArrowStyled} {
    color: rgb(255, 246, 0);
    margin-right: 10px;
  }
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
// adapting the style based on props
// if the props 'hasPoster' is true, the color will be white
// if we don't have a poster image, the color will be black
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

const MovieList = () => {
  const [list, setList] = useState([])
  const { countryCode } = useParams()

  useEffect(() => {
    fetch(API_LIST(countryCode))
      .then((res) => res.json())
      .then((data) => setList(data.results))
  }, [countryCode])

  return (
    <MoviesContainerStyled>
      <ListLinkStyled to='/'>
        <ArrowStyled>&#10688;</ArrowStyled>
        Countries
      </ListLinkStyled>
      {list.map((movie) => (
        <MovieLinkStyled
          to={`/list/${countryCode}/movie/${movie.id}`}
          key={movie.id}
        >
          {/* {console.log(`/list/${countryCode}/movie/${movie.id}`)} */}
          {movie.poster_path === null ? (
            <MovieImgStyled
              src='/assets/notitleposter.png'
              alt='not available/'
            />
          ) : (
            <MovieImgStyled
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          {/* passed props 'hasPoster' for styling */}
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
