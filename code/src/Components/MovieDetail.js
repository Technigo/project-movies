import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=db7243cd4866f0f7a8a865282262f6fd&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
      });
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className="details-container">
      <img
        className="backdrop-image"
        src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
        alt={movieDetails} />
      <div className="detail-wrapper">
        <img
          className="poster-image"
          src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
          alt={movieDetails} />
        <div className="text-wrapper">
          <span className="title">{movieDetails.title}</span>
          <span className="rating">⭐️ {Math.round(movieDetails.vote_average * 10) / 10}</span>
          <h3>{movieDetails.tagline}</h3>
          <p className="over-view">{movieDetails.overview}</p>
        </div>
      </div>
      <button type="button" className="back-button" onClick={goBack}>Go Back</button>
    </section>
  );
};

export default MovieDetail;