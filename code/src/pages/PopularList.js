import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/PopularList.css';

export const PopularList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=a4952259f6d389d2957bfec34fa69938&language=en-US&page=1'
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovies(json.results);
      });
  };
  return (
    <main className="popularPage">
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <article className="movie-wrapper">
            <img
              className="image-poster"
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-text">
              <h1>{movie.title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
          </article>
        </Link>
      ))}
    </main>
  );
};
