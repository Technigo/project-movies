import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import '../style/displayStyling.css'
import '../style/linkStyling.css'

//this page component is to display the list of movie projects that the actor-actress has played//
const ListOfMovies = () => {
  const { castId, } = useParams();
  const [moviesByActor, setMoviesByActor] = useState([]);
  const [castProfile, setCastProfile] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${castId}?api_key=fd00bf32c04d62eccaf294e2d6aa9fa6&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setCastProfile(json)
      });
  }, [castId]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${castId}/combined_credits?api_key=fd00bf32c04d62eccaf294e2d6aa9fa6&language=en-US`)
    .then((res) => res.json())
    .then((json) => {
      //this code is to remove duplicate movieId and return an array with unique id for each movie//
      const uniqueMovies = json.cast.reduce((movies, currentMovie) => {
        const exists = movies.find((movie) => movie.id === currentMovie.id);
        if (!exists) {
          return [...movies, currentMovie];
        }
        return movies;
      }, []);

      setMoviesByActor(uniqueMovies)
    });
  }, [castId]);

  return ( 
    <div className="biography-page">
      <section className="biography-section">
        <div className="bio-image-container">
          <img className="bio-image"
            src={`https://image.tmdb.org/t/p/w185${castProfile.profile_path}`}
            alt={castProfile.name} />
        </div>
        <div className="bio-details">
          <p className="bio-profile-name">{castProfile.name}</p>
          <p className="bio-text">{castProfile.biography}</p>
        </div>
      </section>
      <div>
        <h3 className="movie-project-title">{castProfile.name}'s movie projects: </h3>
      </div>
      <section className="display-card-container">
        {moviesByActor.map((movie) => (
          <Link className="links" to={`/movies/${movie.id}`} key={movie.id}>
            <div className="display-cards">
              <p>{movie.title}</p>
              <img className="display-image" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
              <p className="role">as {movie.character}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
   );
};
 
export default ListOfMovies;
