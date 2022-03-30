import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({movies}) => {
  return (
    <section className="list">
      {movies.map((movie)=> {
        return <Link   
                  key={movie.id}
                  to={`/details/${movie.id}`}
                  className="movie-box"
                  >
                  <div className="info-box">
                    <h1>{movie.original_title}</h1>
                    <p>Released {movie.release_date}</p>
                  </div>
                  <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                  </Link>
        })}
    </section>
  )
}

export default MovieList;