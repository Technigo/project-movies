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
    <div className='more-page'>
      <button onClick={onBackButtonClick}>Movies</button>
      <div className="background" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0) 40%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})` }}>
        <div className="more-info">
        <img className="poster" src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt={movieDetails.original_title} />
          <div className="more-info-text">
            <h3>{movieDetails.original_title}<span className="highlight">{movieDetails.vote_average}/10</span></h3>
            <p>{movieDetails.overview}</p>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default MovieDetails;

