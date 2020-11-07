import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import '../style/displayStyling.css'
import '../style/linkStyling.css'

//this page component is to display the list of movie projects that the crew member has involved in//
const ListOfMovies = () => {
  const { crewId, } = useParams();
  const [moviesByCrew, setMoviesByCrew] =useState([]);
  const [crewProfile, setCrewProfile] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${crewId}?api_key=fd00bf32c04d62eccaf294e2d6aa9fa6&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log("Crew biography", json)
        setCrewProfile(json)
      })
  }, [crewId]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${crewId}/combined_credits?api_key=fd00bf32c04d62eccaf294e2d6aa9fa6&language=en-US`)

    .then((res) => res.json())
    .then((json) => {
      setMoviesByCrew(json.crew)
    });
  }, [crewId]);

  return ( 
    <div className="biography-page">
      <section className="biography-section">
        <div className="bio-image-container">
          <img className="bio-image"
            src={`https://image.tmdb.org/t/p/w185${crewProfile.profile_path}`}
            alt={crewProfile.name} />
        </div>
        <div className="bio-details">
          <p className="bio-profile-name">{crewProfile.name}</p>
          <p className="bio-text">{crewProfile.biography}</p>
        </div>
      </section>
      <div>
        <h3 className="movie-project-title">{crewProfile.name}'s movie projects: </h3>
      </div>
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
    </div>
   );
};
 
export default ListOfMovies;