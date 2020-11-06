import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import '../style/displayStyling.css'
import '../style/linkStyling.css'

const ListOfMovies = () => {
  const { castId, } = useParams();
  const [moviesByActor, setMoviesByActor] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${castId}/combined_credits?api_key=fd00bf32c04d62eccaf294e2d6aa9fa6&language=en-US`)

    .then((res) => res.json())
    .then((json) => {
      console.log(json.cast, "movieByActors")
      setMoviesByActor(json.cast)
    })
  }, [castId]);

  return ( 
    <div className="display-card-container">
      {moviesByActor.map((movie) => (
      <Link className="links" to={`/movies/${movie.id}`} key={movie.overview}>
        <div className="display-cards">
          <p>{movie.title}</p>
          <img className="display-image" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
          <p className="role">as {movie.character}</p>
        </div>
      </Link>
        ))}
    </div>
   );
}
 
export default ListOfMovies;