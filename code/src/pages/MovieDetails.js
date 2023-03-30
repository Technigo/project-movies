import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from 'components/Loader';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=52f9f6dc03440f8be0c16de930243dfe&language=en-US`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false))
  }, [movieId])

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <article className="movie-details-section">
      <button type="button" onClick={onBackButtonClick}>Go back</button>
      {details && (
        <div className="movie-background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
          <div className="movie-summary">
            <img src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title} />
            <div className="movie-details-text">
              <h1><span className="movie-details-title">{details.title}</span><span> ⭐ </span><span className="rating">{Math.round(details.vote_average * 10) / 10}</span></h1>
              <p>{details.overview}</p>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

export default MovieDetails;