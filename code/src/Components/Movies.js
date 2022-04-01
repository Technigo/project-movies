import React from "react"
import { Link } from "react-router-dom"

const Movies = ({ movies }) => {
  return (
    <div className="MovieContainer">
      {movies.map((movies) => (
        <div className="MovieWrapper" key={movies.id}>
          <Link to={`/Details/${movies.id}`}>
            <img
              className="MovieImage"
              src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
              alt={movies.title}
            />

            <div className="MovieOverlay">
              <h2 className="MovieTitle">{movies.title}</h2>
              <p className="releasedate">Released {movies.release_date}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Movies
