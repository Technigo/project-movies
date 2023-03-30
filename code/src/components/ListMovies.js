import React from 'react';
import { Link } from 'react-router-dom';

const ListMovies = ({ listMovies }) => {
  return (
    <div className="movies-container">
      {listMovies.map((movie) => {
        return (
          <Link className="movie" key={movie.id} to={`/individualmovie/${movie.id}`}>
            <img
              className="list-poster"
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={`${movie.title} poster`} />
            <div className="poster-text-container">
              <h1>{movie.title}</h1>
              <p>Release date: {SVGAnimateMotionElement(movie.release_date).format('D MMM YYYY')}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ListMovies;