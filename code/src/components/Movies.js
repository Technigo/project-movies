import React from 'react'
import { Link } from 'react-router-dom'

const Movies = ({movies}) => {
  return (
    <section>
      <div className="moviePage">
      {movies.map((movie) => (
          <Link 
            key={movie.id} 
            to={`/details/${movie.id}`}
            className="moviePosterContainer"
          >               
            <img 
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} 
              alt={movie.title}
              className="movieImage"
            />                
            <div className="movieOverlay">
                <h1>{movie.title}</h1>
                <p>Release date: {movie.release_date}</p>
              </div>
          </Link>
      ))}
      </div>
    </section>
  )
}

export default Movies