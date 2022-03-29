import React from "react"

const One = ({ movies }) => {
  return (
    <section className="">
      {movies.map((movies) => {
        return (
          <>
            <div className="" key={movies.id}>
              <h1>{movies.original_title}</h1>
              <img src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={movies.title} />
              <h2>Description: {movies.overview}</h2>
              <h2>Release date: {movies.release_date}</h2>
              <h2>Rating: {movies.vote_average}</h2>
            </div>
          </>
        )
      })}
    </section>
  )
}

export default One
