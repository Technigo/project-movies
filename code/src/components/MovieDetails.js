import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom'
import { SINGLE_MOVIE_URL } from '../data/urls';
import arrowIcon from '../data/arrowIcon.png';
import 'css/movieDetails.css'
// import { useNavigate } from 'react-router-dom'

export const MovieDetails = () => {
  const [movie, setMovie] = useState()
  // const [movie, setMovie] = useState()
  const { movieId } = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    fetch(SINGLE_MOVIE_URL(movieId))
      .then((res) => res.json())
      .then((json) => setMovie(json))
  }, [movieId])

  // const PreviousPage = () => {
  //  navigate(-1);
  // }

  return (
    <section className="detailsContainer">
      {movie && (
        <div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
          <NavLink className="link" to="/"> <img className="arrowIcon" src={arrowIcon} alt="back button" /><span>Movies</span> </NavLink>
          <div className="summary">
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
            <div className="details">
              <h1 className="title">{movie.title}</h1>
              <div className="ratingRelease">
                <p className="rating"><b>Rating:</b> ⭐️ {Math.round(movie.vote_average * 10) / 10}</p>
                <p className="released"><b>Release date:</b> {movie.release_date}</p>
              </div>
              <p className="overview">{movie.overview}</p>
              {/* <button type="button" onClick={PreviousPage}> Go Back </button> */}
            </div>
          </div>
        </div>)}
    </section>
  );
}
