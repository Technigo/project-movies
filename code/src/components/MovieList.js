import React, { useState, useEffect } from 'react'

import { Movie } from './Movie.js'

//const API_KEY = 'c07a4dcb1d91b54eb3b153e458e26489'

export const MovieList = () => {

  const MOVIES_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=c07a4dcb1d91b54eb3b153e458e26489&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'

  const [movies, setMovies] = useState([])

  const getMovies = () => {
    fetch(MOVIES_URL)
      .then((response) => response.json())
      .then((json) =>
        setMovies(json.results)
      )
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <>
      {movies.map(movie => {
        return <Movie key={movie.id} {...movie} />
      })}
    </>
  )
}


//add some sorting based on json.results[0].popularity or json.results[0].vote_average
//add some condition to only include movies with title and overview