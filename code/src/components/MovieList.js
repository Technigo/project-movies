import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = 'c3172ec38bb05890b52b6288d18c7b8e';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
        <img
          key={movie.title}
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt="movie posters"
        >
        </img>  
        <div>
          <h1>{movie.title}</h1> 
          <p>Released {movie.release_date}</p>
        </div>
        </Link> 
      ))}
    </div>
  );
};

export default MovieList;
