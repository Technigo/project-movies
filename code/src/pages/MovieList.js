import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({ list }) => {
  return (
    <section className='movies-container'>
      {list.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <div className='movie-card'>
            {/* {console.log(movie)} */}
            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />
            <div className='overlay'>
              <div className='movie-data'>
                <h1>{movie.title}</h1>
                <p>Released {movie.release_date}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default MovieList
