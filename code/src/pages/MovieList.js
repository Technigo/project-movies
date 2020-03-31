import React, { useEffect, useState } from 'react'
import { MovieCard } from 'components/MovieCard'
import { LoadingSpinner } from 'components/LoadingSpinner'
import './movielist.css'

export const MovieList = ({ movieList }) => {
  const [movies, setMovies] = useState([]) //Used to store array of movies from GET request
  const [loading, setLoading] = useState(true) //Loading state to show LoadingSpinner when waiting for promise to be resolved

  const apiKey = '85c8192ada23df0631c9cf9ca0b5729d'
  const url = `https://api.themoviedb.org/4/list/${movieList}?page=1&api_key=${apiKey}` //movieList based on chosen list in nav (see App.js)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results) //Changes state of movies with use of json from GET request
        setLoading(false) //LoadingSpinner gets hidden as a result
      })
  }, [movieList]) //Sends new GET request to API when new movie list is chosen in nav (see App.js)


  //When the site is no longer loading and the spinner is hidden and the movie-container with listed movies is displayed
  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading &&
        <div className="movie-container">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date} />
          ))}
        </div>
      }
    </>
  )
}