import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { NotFound } from './NotFound'

export const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  /*same as in Movielist, but created function with param to avoid having the function being dependent on data from outside scope*/  
  const fetchMovieDetails = (movieId) => {
    const API_KEY = `625126cdbe1a2a3d2d941c58292f85ef`
    const MOVIE_DETAIL_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`

    fetch(MOVIE_DETAIL_URL)
      .then((response) => response.json())
      .then((json) => setMovie(json))
      .catch((error) => console.error(error))
  }

  /* fetchMovieDetails is invoked with the id as a param. */ 
  /* id as dependency = updates when the id changes */
  useEffect(() => {
    fetchMovieDetails(id)
  }, [id]) 

  /*redirects the user to the Notfound page if the url is /movies and then something not matching to an acutal film. */
  if (movie.success === false){

    return (
      <NotFound />
    )

  } else {

    return (

      <main 
        className='movie-backdrop' 
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}
      >

        <Link className='back-link' to='/'>
          <img className='back-arrow' alt='back arrow' src='../left-arrow.svg'/>
          Movies
        </Link>

        <div className='movie-details-container'>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}/>
          <div className='movie-details'>
            <h1>{movie.title}
              <span className='movie-rating'>
                {movie.vote_average} / 10
              </span>
            </h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      </main>
      
    )
  }
}