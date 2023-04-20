import React/* , { useEffect, useState } */ from 'react';
import { Link } from 'react-router-dom'
/* import Select from './Select'; */
import 'css/moviePage.css'

const Movies = ({ getMovies }) => {
  return (
    <>
      {/* <Select option={option} setOption={setOption} API_URL={API_URL} /> */}
      {getMovies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <Link to={`/detail/${movie.id}`}>
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title} />
            <div className="movie-info">
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-date">Released: {movie.release_date}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default Movies