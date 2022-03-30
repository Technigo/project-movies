import React from "react"
import {Link} from "react-router-dom"

const Movies = ({ movies }) => {
  return (
    <div className="cards">
      {movies.map((movies) => {
        return (
          <div key={movies.id}>
            <Link to={`/Details/${movies.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                alt={movies.title}
              />
              <div className="test">
              <div className='overlay'>

                <div className='movie-text'>
                  <h2 className='title'>{movies.title}</h2>
                  <p className='releasedate'>Released {movies.release_date}</p>
                </div>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Movies

/* 
<div className="card" key={movies.id}>
  <img
    src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`}
    alt={movies.title}
  />
</div> 
*/
