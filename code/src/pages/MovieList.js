import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export const MovieList = () => {
  const MOVIE_URL = "https://api.themoviedb.org/3/movie/popular?api_key=dbc6417f14d69bcdf76f3599707a6abd&language=en-US&page=1";
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(MOVIE_URL)
      .then(res => res.json())
      .then(json => setMovieList(json.results))
  }, [])

  return (
    <div>
      {movieList.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
            <h1>{movie.title}</h1>
            <h2>{movie.release_date}</h2>
          </Link>

  
      ))}
    </div>
  )

}
