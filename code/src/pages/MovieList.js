import React from 'react'
import { Link } from 'react-router-dom'

const MovieList = ({ movies }) => {
  return (
    <section className="movie-list">
      {movies.map((movie) => ( 
        <article className="movie-list-items"
          key ={movie.id}>
          <Link to = {`/movies/${movie.id}`}>  
            <p>{movie.title}</p>  {/* maybe change to h2 or h3 later */}
            <p>{movie.release_date}</p>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          </Link>
        </article>  
      ))}
    </section>
  )
}

export default MovieList