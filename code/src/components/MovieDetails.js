import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { SINGLE_MOVIE_URL } from 'Utils/Urls';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  // Function for the back button
  const onBackButtonClick = () => {
    navigate(-1);
  }

  // Fetches the info for a specific movie with the movie ID
  useEffect(() => {
    fetch(SINGLE_MOVIE_URL(id))
      .then((res) => res.json())
      .then((data) => setMovieDetails(data))
  }, [id])
  // Returns the detail page with the backdrop set as the background and a div for movie details
  return (
    <div
      className="detailPage"
      style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})` }}>
      <div className="detailBox">
        <button
          className="backButton"
          type="button"
          onClick={onBackButtonClick}>
          <span className="arrow" /> Go back
        </button>
        <img
          className="detailPoster"
          src={`http://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
          alt={movieDetails.title} />
        <h1 className="detailTitle">{movieDetails.title}</h1>
        <p className="detailScore"><span role="img" alt="star">⭐</span> {Math.round(movieDetails.vote_average * 10) / 10}</p>
        <p className="detailOverview">{movieDetails.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
