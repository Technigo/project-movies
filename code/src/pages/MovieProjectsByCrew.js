import React, { useState, useEffect } from 'react'
import { Params, useParams, Link } from 'react-router-dom'

import '../style/displayStyling.css'
import '../style/linkStyling.css'

const ListOfMovies = () => {
  const { crewId, } = useParams();
  const [moviesByCrew, setMoviesByCrew] =useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${crewId}/combined_credits?api_key=fd00bf32c04d62eccaf294e2d6aa9fa6&language=en-US`)

    .then((res) => res.json())
    .then((json) => {
      setMoviesByCrew(json.crew)
      console.log("movieListbyCrew", json.crew)
    })
  }, [crewId]);

  return ( 
    <div className="display-card-container">
      {moviesByCrew.map((movie) => (
      <Link className="links" to={`/movies/${movie.id}`} key={movie.id}>
        <div className="display-cards">
          <p>{movie.title}</p>
          <img className="display-image" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
          <p className="role">as {movie.job}</p>
        </div>
      </Link>
        ))}
    </div>
   );
}
 
export default ListOfMovies;