import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom'
import './liststyle.css'

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const moviesURL =
    "https://api.themoviedb.org/3/movie/popular?api_key=57134eb2a62754e27d3ec2d3fe453512&language=en-US&page=1";

  useEffect(() => {
    fetch(moviesURL)
      .then(res => res.json())
      .then(json => {
        setMovies(json.results);
      });
  }, []);

  return (
    <div className='listContent'>
      {movies.map(movie => (
        <Link className="movies" key={movie.id} to={`/movies/${movie.id}`}>
            <img
              src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.original_title}
            />
            <div className="infoAbout">
              <h1>{movie.title}</h1>
              <p>Premiered: {movie.release_date}</p>
            </div>
        </Link>
      ))}
    </div>
  );
};