import React, { useState, useEffect } from 'react'
import { API_URL } from '../reusable/urls'
import { Route, Link } from 'react-router-dom'

import MovieElement from '../components/MovieElement'

const MovieList = ({filterType}) => {
  const [movieList, setMovieList] = useState([])
  const [errorMessage, setErrorMessage] = useState()

  useEffect (() => {
   fetch(API_URL(filterType))
      .then(response => response.json())
      .then(data => {
        if (data.success === false) {
          setErrorMessage(data.status_message)
        } else {
          setMovieList(data.results)
        }})
      .catch (err => setErrorMessage(true))
  }, [filterType])


  if (errorMessage) {
    return (
      <div className="error">
        <img src="../favicon/404-error.svg" alt="error icon" />
        <h3>{errorMessage}</h3>
        <Route path="/">
          <Link to={"/"}>
            <button className="error-btn">
              Back to homepage
            </button>
          </Link>
        </Route>
      </div>
    )
  } 
    return (
     <section className="movie-container">
        {movieList.map(movie =>
          <Link key={movie.id} to= {`/movie/${movie.id}`}>  
            <MovieElement {...movie} />
          </Link>
        )}      
      </section>
    )
}

export default MovieList 