import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

//API URLS
import { MOVIE_DETAILS_URL } from "../utils/urls"

//Styled components
import { DetailsContainer } from './styles/Containers.styled'
import { DetailsWrapper, DetailsTextWrapper } from './styles/Wrappers.styled'
import { BackButton } from './styles/Buttons.styled'

const MovieDetails = () => {
  const [details, setDetails] = useState([])
  const { movieId } = useParams() //access parameters from the URL
  const navigate = useNavigate();

  useEffect(() => {
    fetch(MOVIE_DETAILS_URL(movieId))
      .then(res => res.json())
      .then(data => setDetails(data))
  }, [movieId])
  console.log(details.poster_path)
  return (
    <DetailsContainer url={`url(https://image.tmdb.org/t/p/original${details.backdrop_path})`}>
      <DetailsWrapper>
        <BackButton onClick={() => navigate(-1)}><i role="button" alt="left arrow"></i></BackButton>
        <img src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title} />
        <DetailsTextWrapper>
          <h2>{details.title}</h2> <span><img src="/star.png" alt="rating" />{details.vote_average}</span>
          <p>{details.overview}</p>
          </DetailsTextWrapper>
      </DetailsWrapper>
    </DetailsContainer>
  )
}

export default MovieDetails;