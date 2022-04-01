import React from 'react';
import { Link } from 'react-router-dom';

// DISPLAY OF STARTER PAGE

const MovieList = ({ movies }) => {
  return (
    <section className="list">
      {movies.map((movie)=> {
        return <Link   
                  key={movie.id}
                  to={`/details/${movie.id}`}
                  className="movie-box"
                  >
                  <img 
                    className="movie-poster" 
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} 
                    alt={movie.title} />
                  <div className="movie-image-overlay"></div>
                  <div className="info-box">
                      <div className="movie-text-overlay">
                        <h1>{movie.original_title}</h1>
                        <p>Released {movie.release_date}</p>
                      </div>
                  </div>
                </Link>
        })}
    </section>
  )
}

export default MovieList;