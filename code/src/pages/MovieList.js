import React, {useState, useEffect} from 'react'
import { MovieCard } from '../components/MovieCard';


export const MovieList = () => {
  const MOVIES_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=e251592f16990230853a7c79c14797f4&region=SE"
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIES_URL)
    .then(response => response.json()
    .then(json => setMovies(json.results)))
  }, [])

  return (
    <>
    <section className="movie-list">
      {movies.map(movie => {
        return (
          <MovieCard {...movie}
          />
        )
      }
      )}
    </section>
    </>
  );
}
