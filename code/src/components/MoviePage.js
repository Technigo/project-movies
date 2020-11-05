import React, { useState, useEffect } from 'react'

import { Link, useParams } from 'react-router-dom'
import { BackIcon } from './Back'

export const MoviePage = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([]); 
  
  //We use [] in the Use state hook since it will be returning an array
  useEffect(() => {
    const MOVIE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=3bc84b0ae751d27c186bde28023ce8fe&language=en-US`
    fetch( MOVIE_URL )
      .then((response) => response.json())
      .then((json) => {
        setMovie(json)
        console.log(json)
      })
  }, [movieId])

  return (
    <>
        <div 
          className='movie-page-background' 
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
          <Link to ='/' exact='true'>
            <BackIcon />
          </Link>
          <div className='movie-page-content'>
            <img className='movie-page-poster' src= {`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.original_title}/>
            <div className='movie-page-text-content'>
              <h2 className='movie-page-title'>{movie.original_title}</h2>
              <p className='movie-rating'><span role='img' aria-label='star'>⭐</span>{`${movie.vote_average} /10`}</p>
              <p className='movie-overview'>{movie.overview}</p>
            </div>
          </div>
        </div>
    </>
      )
}

