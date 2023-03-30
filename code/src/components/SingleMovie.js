import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_KEY } from 'utils/key';

const SingleMovie = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
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
        ⬅ Go Back
      </button>
      <img className="single-movie-poster" src={`http://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`} alt="poster" />
      <div className="single-movie-details">
        <h2 style={{ color: 'whitesmoke' }}>{movieDetails.title}</h2>
        <p className="single-rating" style={{ color: 'whitesmoke' }}>⭐ {Math.round(movieDetails.vote_average * 10) / 10}</p>
        <p className="single-movie-overview" style={{ color: 'whitesmoke' }}>{movieDetails.overview}</p>
      </div>
    </div>
  )
}

export default SingleMovie;