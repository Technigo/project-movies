import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


export const HomePage = () => {
  const [movies, setMovies] = useState([''])
  // useEffect(() => {
  fetch('https://api.themoviedb.org/3/movie/popular?api_key=70e43da479b5b8f5a366a40753e1b1e3&language=en-US&page=1')
    .then((response) => response.json())
    .then((data) => {
      setMovies(data.results)
    })
  // })
  return (
    <section className="movieContainer">
      {movies.map((prop) => (
        <div className="movieName" key={prop.id}>
          <Link className="movie-link" to={`/${prop.id}`}>
            <img className="movieImage" src={`https://image.tmdb.org/t/p/w500${prop.poster_path}`} alt={prop.title} />
            <div className="movieText">
              <h1 className="movieTitle">{prop.title}</h1>
              <h2 className="releaseDate">{prop.release_date}</h2>
            </div>
          </Link>
        </div>

      ))
      };
    </section >

  )
}
