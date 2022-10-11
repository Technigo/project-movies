import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ movies }) => {
  return (
    <div className="movie-container">
      {movies.map((movie) => {
        return (
          <Link to={`/individualmovie/${movie.id}`} key={movie.id}>
            <div className="movie-poster">
              <img
                className="list-poster"
                alt={movie.title}
                scr={movie.poster_path} />
              <div className="movie-info">
                <h1>{movie.title}</h1>
                <p>{movie.release_date}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  );
}

export default List;