import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DETAILS_URL } from '../utils/urls'
import { Background } from 'components/Background'
import { ReturnButton } from 'components/ReturnButton'
import NotFound from 'components/NotFound'
import styled from 'styled-components'

const SummaryContainer = styled.div `
  display: flex;
  align-items: flex-end;
  padding: 50px;
`
const StyledImg = styled.img `
  border: 5px solid #fff;
`
const DetailContainer = styled.div `
  margin-left: 20px;  
`
const Description = styled.p `
  max-width: 400px;
`
const Rating = styled.span `
  font-size: 17px;
  color: red;
  font-weight: 400;
  margin-left: 10px;
`

const MovieDetails = () => {
  const { movieId } = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        if (data.title) {
          setMovieDetails(data)
        } else {
          setError(true)
        }
      })
  }, [movieId])

  if (error) {
    return <NotFound />
  }

  return (
    <>
      <div>
        <ReturnButton />
        <Background
          backgroundUrl = {movieDetails.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}` : ''}
        >
          {/* <button>Return to Movielist</button> */}
          <SummaryContainer>
            <StyledImg src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w342${movieDetails.poster_path}` : ''} alt={movieDetails.title} />
            <DetailContainer>
              <h1>{movieDetails.title} <Rating>{movieDetails.vote_average}/10</Rating></h1>
              <Description>{movieDetails.overview}</Description>
            </DetailContainer>
          </SummaryContainer>
        </Background>        
      </div>
    </>
  )
}


export default MovieDetails