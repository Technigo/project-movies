import React, {useState, useEffect} from 'react'
import { MovieCard } from '../components/MovieCard'
import { TOP_RATED_URL } from '../reusable/urls'
export const MovieList = () => {
  
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(TOP_RATED_URL)
    .then(response => response.json()
    .then(json => setMovies(json.results)))
  }, [])
  return (
    <>
    <div className="movie-list">
      {movies.map(movie => {
        return (
          <MovieCard key={movie.id} {...movie}
          />
        )
      }
      )}
    </div>
    </>
  )
}