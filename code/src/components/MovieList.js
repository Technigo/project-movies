import React, { useState, useEffect } from 'react'
import { API_URL } from '../reusable/urls'

const MovieList = () => {
  const [movieList, setMovieList] = useState([])

  useEffect (() => {
   fetchMovieList()
  }, [])

  const fetchMovieList = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setMovieList(data.results))
      .catch (err => console.dirr(err))
     }
    
    return (
     <section className="movie-container">
      {
        movieList.map((movies) => {
          return(
            <div className="movie-container-two" key={movies.id}>
              <p>{movies.original_title}</p>
              <p>{movies.release_date}</p>
              <img className="movie-img" src={`https://image.tmdb.org/t/p/w780${movies.poster_path}`} alt={movies.original_title}/>
            </div>
          )
        })
      }          
      </section>
    )
}

export default MovieList