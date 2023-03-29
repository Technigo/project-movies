import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ movies }) => {
  return (
    <div className="movie-container">
      {movies.map((movie) => {
        return (
          <Link to={`/individualmovie/${movie.id}`} key={movie.id}>
            <div className="movie-poster-list">
              <img
                className="list-poster"
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title} />
              {/* <div className="movie-info">
                <h1>{movie.title}</h1>
                <p>{movie.release_date}</p>
              </div> */}
            </div>
          </Link>
        )
      })}
    </div>
  );
}

export default List;