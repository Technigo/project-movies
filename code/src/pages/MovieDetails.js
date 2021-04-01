import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { BackButton } from '../components/BackButton'

export const MovieDetails = () => {
  const [details, setDetails] = useState([])
  const {movie_id} = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=2fbbfc5b76142a312e36c1069a8f5912&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
        console.log(data)
      })
  }, [movie_id])

return(
  <>
    <div className='details-page-wrapper'>
      <div className='details-container'>
        <img className='small-movie-poster' src={`https://image.tmdb.org/t/p/w300${details.poster_path}`} alt=" small movie poster"/>
        <div className="title-rating-overwiev-container">
          <div className="title-rating-container">
            <h2 className='movie-title'>{details.original_title}</h2>
            <h2 className='rating'>{details.vote_average}/10</h2>
          </div>
          <h2 className='overview'>{details.overview}</h2>
        </div>
      </div>
      <BackButton />
      <img className='background-movie-poster' src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt="background movie poster"/>
    </div>
  </>
)
}