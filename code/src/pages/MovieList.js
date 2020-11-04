import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { MOVIES_API } from '../constant'
import '../style/movieCardContainer.css'

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect (() => {
    fetch(MOVIES_API)
    .then((res) => res.json())
    .then((json) => {
      console.log(json.results, "json")
      setMovies(json.results)
    })
  }, []);
  return (
    <div className="movie-card-container">
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <article className="movie-cards" >
            <img 
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} 
              alt={movie.title} 
            />
          </article>
        </Link>
      ))}
    </div>
    );
};
 
export default MovieList;