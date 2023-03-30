import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import '../listmovies.css';

const ListMovies = ({ listMovies }) => {
  return (
    <div className="movies-list">
      {listMovies.map((movie) => {
        return (
          <Link
            key={movie.id}
            to={`/details/${movie.id}`}
            className="single-movie">
            <img className="cover-image" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="poster" />
            <div className="hover-container">
              <h1 className="text-hover">{movie.original_title}</h1>
              <p className="text-hover">Released: {moment(movie.release_date).format('D MMMM YYYY')}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ListMovies;