import React from 'react';
import { Link } from 'react-router-dom';

const ListMovies = ({ listMovies }) => {
  return (
    <>
      <p>test hej super hej</p>
      <div className="movies-list">
        {listMovies.map((movie) => {
          return (
            <Link
              key={movie.id}
              to={`/details/${movie.id}`}
              className="list-element">
              <img className="cover-image" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="poster" />
              <div className="hover-container">
                <h1 className="movie-title">{movie.original_title}</h1>
                <h3 className="release-date">Released {movie.release_date}</h3>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default ListMovies;