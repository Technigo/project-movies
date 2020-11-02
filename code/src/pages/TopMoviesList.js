import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = '2ff070f81f8c9206d9426765e063f416';

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
    <div className="movie-card">
      {topMovies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <Link to={`/top-movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.original_title} />
            <h2>{movie.original_title}</h2>
            <p>{movie.release_date}</p>
          </Link>
        </div>
      ))}
    </div>
  )
};

//Same logic applied in the MoviesList and TopMovieDetails components is applied to these
//TopMovies components. We just work with different data retrieved from doing a new main fetch
//to the endpoint showing top rated movies instead.