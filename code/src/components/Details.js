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
    <div
      className="details-container"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%),
      url (https://image.tmdb.org/t/p/w1280${singleMovie.backdrop_path})`
      }}>
      <button type="button" onClick={onGoBackButtonClick}>Back to movies</button>
      <img className="background-img" src={`https://image.tmdb.org/t/p/w1280/${singleMovie.backdrop_path}`} alt={singleMovie.original_title} />
      <div className="movie-info">
        <img className="poster" src={`https://image.tmdb.org/t/p/w342/${singleMovie.poster_path}`} alt={singleMovie.original_title} />
        <div className="header">
          <h2><span className="title">{singleMovie.original_title}</span><span className="rating">{Math.round(singleMovie.vote_average * 10) / 10}</span></h2>
          <p>{singleMovie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
