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
            {bla.title}
          </Link>
        )
      })}
    </section>

  )
}

export default Movies