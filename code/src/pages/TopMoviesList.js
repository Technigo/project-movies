import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { API_KEY } from '../key';

export const TopMoviesList = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((json) => {
        setTopMovies(json.results)
      })
  }, []);

  return (
    <section className="movie-cards-container">
      {topMovies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <Link to={`/top-movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.original_title} />
            <div className="text-over-movie-card">
              <h2>{movie.original_title}</h2>
              <p>{`Released ${movie.release_date}`}</p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  )
};

//Same logic applied in the MoviesList and TopMovieDetails components is applied to these
//TopMovies components. We just work with different data retrieved from doing a new main fetch
//to the endpoint showing top rated movies instead.