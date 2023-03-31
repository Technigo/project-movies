import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { API_KEY } from 'utils/key';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClapperboard } from '@fortawesome/free-solid-svg-icons'
import { SINGLE_MOVIE } from 'utils/urls';

const SingleMovie = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    fetch(SINGLE_MOVIE(id))
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((error) => console.log(error))
  }, [id])

  const backButton = () => {
    navigate('/')
  }

  return (
    <div className="single-movie-wrapper" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(http://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path})` }}>

      {/* <div style={pageStyle}> */}
      <button className="back-button" type="button" onClick={backButton}>
        <FontAwesomeIcon icon={faClapperboard} /> Back to movies
      </button>

      <img className="single-movie-poster" src={`http://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`} alt="poster" />
      <div className="single-movie-details">
        <h2 className="single-movie-title">{movieDetails.title}</h2>
        <p className="single-rating">⭐ {Math.round(movieDetails.vote_average * 10) / 10}</p>
        <p className="single-movie-overview">{movieDetails.overview}</p>
      </div>
    </div>
  )
}

export default SingleMovie;