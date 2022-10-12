import React from 'react'

const MovieList = ({ movies }) => {
  return (
    <>
      <section className="movie-list">
        {movies.map((movie) => (
          <div className="list-card" key={movie.id}>
            <p>{movie.title} woooooppp</p>
          </div>
        ))}
      </section>
      <p>Hello!</p>
    </>
  )
}

export default MovieList