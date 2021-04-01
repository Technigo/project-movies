import React, { useState, useEffect } from 'react'
import { API_URL } from '../reusable/urls'
import { Link } from 'react-router-dom'

import MovieElement from '../components/MovieElement'

const MovieList = ({filterType}) => {
  const [movieList, setMovieList] = useState([])

  useEffect (() => {
   fetch(API_URL(filterType))
      .then(response => response.json())
      .then(data => setMovieList(data.results))
      .catch (err => console.dirr(err))
  }, [filterType])

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