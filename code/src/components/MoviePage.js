import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { Button } from './Button'

export const MoviePage = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const MOVIE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=3bc84b0ae751d27c186bde28023ce8fe&language=en-US`
    fetch( MOVIE_URL )
      .then((response) => response.json())
      .then((json) => setMovie(json))
      .catch((error) => console.error('Request failed', error))
  }, [movieId])

  useEffect(() => {
    if(movie.id) setLoading(false)
  }, [movie]);

  

  return (
    <>
      {!loading && (
      <div 
        className='movie-page-background' 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})` }}>
        <Button />
        <div className='movie-page-content'>
          <img className='movie-page-poster' src= {`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.original_title}/>
          <div className='movie-page-text-content'>
            <h2>{movie.title}</h2>
            <p>Runtime : {movie.runtime} mins</p>
            <p><span className='star' role='img' aria-label='star'>⭐</span>{`${movie.vote_average} /10`}</p>
            <p>{movie.overview}</p>
            <a href={movie.homepage} target="_blank">Know More</a>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

