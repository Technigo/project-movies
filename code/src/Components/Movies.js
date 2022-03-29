import React from "react"

const Movies = ({ movies }) => {
  return (
    <div className="cards">
      {movies.map((movies) => {
        return (
          <>
            <div className="card" key={movies.id}>
              <img
                src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`}
                alt={movies.title}
              />
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Movies

//<h1>{movies.original_title}</h1>
//<h2>Release date: {movies.release_date}</h2>
//<h2>Description: {movies.overview}</h2>
//<h2>Rating: {movies.vote_average}</h2>
