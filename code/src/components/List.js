import React from "react"
import { Link } from "react-router-dom"

const List = ({ movies }) => {
  return (
    <section>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/details/${movie.id}`}>
            <h2> {movie.original_title} </h2>

            <img
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt={movie.title}
            />

            <h2>{movie.release_date}</h2>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default List
