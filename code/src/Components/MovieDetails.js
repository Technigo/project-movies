import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SINGLE_MOVIE_URL } from 'utils/urls';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const {movieTitle} = useParams();
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    // navigate(-1);
    navigate('/')
  }

  useEffect(()=> {
    fetch(SINGLE_MOVIE_URL(movieTitle))
    .then((res) => res.json())
    .then((data) => {
      setMovieDetails(data)
    })
  }, [movieTitle]);

  return (
    <div>
      <button onClick={onBackButtonClick}>Movies</button>
      <img className="poster" src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt={movieDetails.title} />
      <div className="more-info">
        <h3>{movieDetails.original_title}</h3>
        <p>{movieDetails.overview}</p>
      </div>
    </div>
  )
}

export default MovieDetails;

