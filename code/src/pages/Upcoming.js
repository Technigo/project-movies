import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Upcoming = () => {
  const api_key = "67a5c607e91b1a60e64b4e131b88956b";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)
        console.log(json)
      })
  }, [])

  return (
    <div className="main-wrapper">
      <section className="main-content">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.id}></img>
            <div className="hover-details">
              <h1>{movie.title}</h1>
              <p>Release date {movie.release_date}</p>
            </div>
          </Link>
        ))}
      </section>
    </div >
  )

}

