import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./movielist.css";

export const MovieList = ({ sorting }) => {
  const [movies, setMovies] = useState([])
  const apiKey = "84288b086658b1092348123e4fc9180a"
  const url = `https://api.themoviedb.org/3/movie/${sorting}?api_key=${apiKey}&language=en-US&page=1`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setMovies(json.results)
      })
  }, [url])

  return (
    <div className="movie-list-container">
      {movies.map(movie => (

        <div className="movie-list-movie" key={movie.id} >
          <Link to={`/movies/${movie.id}`}>
            <div className="hover-container">
              <h1>{movie.title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
            <div>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </div>
          </Link>
        </div >
      ))
      }
    </div >
  )
}
