import React, { useEffect, useState } from 'react'
import { MovieThumb } from "./MovieThumb"

export const MovieList = () =>{
  const MOVIES_URL = "https://api.themoviedb.org/3/movie/popular?api_key=e7fa02905a065e6c75198742ec299b55&language=en-US&page=1";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(MOVIES_URL)
    .then(response => response.json())
    .then(json => setMovies(json.results))
  },[]);

  return(
    <>
    <section className="movies-list">
      {movies.map(movie => (
        <MovieThumb
          key={movie.id}
          name={movie.title}
          poster_image={movie.poster_path}
          released={movie.release_date}
          id={movie.id} />
      ))}
    </section>
    </>
  )
}