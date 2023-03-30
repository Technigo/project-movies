import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
  const { movieInfo } = useParams();
  const [singleMovie, setSingleMovie] = useState({});
  const navigate = useNavigate();

  const onGoBackButtonClick = () => {
    navigate(-1);
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieInfo}?api_key=4d07e418e3a6ee346618c7a898de9210&language=en-US&page=1`)
      .then((response) => response.json())
      .then((fetchData) => {
        setSingleMovie(fetchData);
        console.log(fetchData);
      });
  }, [movieInfo]);
  return (
    <div className="test">
      <img className="background-img" src={`https://image.tmdb.org/t/p/w1280/${singleMovie.backdrop_path}`} alt={singleMovie.original_title} />
      <button className="backButton" type="button" onClick={onGoBackButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 32H361.9l-1 1-127 127h92.1l1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128V96c0-15.1-5.3-29.1-14-40l-104 104H512zM294.1 32H201.9l-1 1L73.9 160h92.1l1-1 127-127zM64 32C28.7 32 0 60.7 0 96v64H6.1l1-1 127-127H64zM512 192H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192z" />
        </svg>
        Back to movies
      </button>
      <div className="movie-info">
        <img className="poster" src={`https://image.tmdb.org/t/p/w342/${singleMovie.poster_path}`} alt={singleMovie.original_title} />
        <div className="movie-text">
          <h2><span className="title">{singleMovie.original_title}</span><span className="rating"> ⭐️ {Math.round(singleMovie.vote_average * 10) / 10}</span></h2>
          <p className="info">{singleMovie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;