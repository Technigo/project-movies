import React from 'react'

const MoviesOverview = ({ movies, posterSize }) => {
  

  return (
    <section>
      {movies.map((movie, index) => {
        return (
          <a key={index} href={`/movies/${movie.id}`}>
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
          </a>
        )
      })}
    </section>
  )
}

export default MoviesOverview