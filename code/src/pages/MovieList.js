import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { API_URL_MOVIES } from '../reusables/Urls'
import TopBar from '../components/TopBar'
import MovieCard from '../components/MovieCard'

const MovieList = ({ movies, setMovies }) => {
  const {list} = useParams()

  useEffect(() => {
    fetch(API_URL_MOVIES(list))
      .then(response => response.json())
      .then(json => setMovies(json.results))
      .catch(err => console.error(err))
  }, [list, setMovies])


  if (!movies) {
    return (
      <section className="page-not-found">
        <p className="page-not-found-text">Page not found</p>
      </section>
    )
  }

  return (
    <>
      <TopBar 
        list={list}
      />
      <section className="movies-section">
        {movies.map(movie => <MovieCard list={list} key={movie.id} {...movie} />)}
      </section>
    </>
  )
}

export default MovieList