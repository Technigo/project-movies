import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const MovieDetail = () => {
  // const movie_id= '399566'
  // const DETAIL_URL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=f8d93b3169765fb54ceb97a483ec4821&language=en-US`
  const DETAIL_URL = 'https://api.themoviedb.org/3/movie/399566?api_key=f8d93b3169765fb54ceb97a483ec4821&language=en-US'
  const [movie, setMovie ] = useState({})
  

  useEffect(() => {
    fetch(DETAIL_URL)
      .then((response) => response.json())
      .then((json) => setMovie(json))
  },[DETAIL_URL])

  const backgroundImage= `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`

  return (
    <article className='detailPage'>
      <Link className='back-link' to='/'>
        <i class="fas fa-chevron-circle-left"></i>
        Back
      </Link>
      <div className='background'>
        <div className='summary'>
          <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt='{movie.tile}' />
          <div className='details-page-details'>
            <h1>
              {movie.title}
              <span className='rating'>{movie.vote_average}/10</span>
            </h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
