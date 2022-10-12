import React from 'react'
import { Link } from 'react-router-dom'

const Movies = ({ blabla }) => {
  return (
    <section className="movies">
      {blabla.map((bla) => {
        return (
          <Link
            key={bla.id}
            to={`/details${bla.title}`}
            className="movie">
            <img src={`https://image.tmdb.org/t/p/w342/${bla.poster_path}`} alt="poster" />
            <div className="movie-hover">
              <h1> {bla.title} </h1>
              <p> {bla.release_date} </p>
            </div>
          </Link>
        )
      })}
    </section>

  )
}

export default Movies