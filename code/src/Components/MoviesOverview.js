import React from 'react'
import { Link } from 'react-router-dom'

// import urlSlug from 'url-slug' /* might remove this... */

const MoviesOverview = ({ movies, posterSize }) => {
  

  return (
    <section>
      {movies.map((movie, index) => {
        return (
 //         <a key={index} href={`/movies/${movie.id}`}>
            <Link to={`/movies/${movie.id}`}>
            <img 
              src={`https://image.tmdb.org/t/p/${posterSize}${movie.poster_path}`} 
              alt={`Poster for ${movie.title}`}
            ></img>
            <div className="overlay">
              <div className="description">
                <h3>{movie.title}</h3>
                <p>Released {movie.release_date}</p>
              </div>
            </div>
            </Link>
   //       </a>
        )
      })}
    </section>
  )
}

export default MoviesOverview