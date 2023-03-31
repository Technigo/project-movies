import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from 'components/Loader';

const TVSeriesDetails = () => {
  const [tvDetails, setTvDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const { tvSeriesId } = useParams();
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  }
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/tv/${tvSeriesId}?api_key=52f9f6dc03440f8be0c16de930243dfe&language=en-US`)
      .then((res) => res.json())
      .then((data) => setTvDetails(data))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false))
  }, [tvSeriesId])

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <article className="movie-details-section">
      <button type="button" onClick={onBackButtonClick} className="back-button">⬅️</button>
      {tvDetails && (
        <div className="movie-background" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${tvDetails.backdrop_path})` }}>
          <div className="movie-summary">
            <img src={`https://image.tmdb.org/t/p/w342${tvDetails.poster_path}`} alt={tvDetails.title} />
            <div className="movie-details-text">
              <h1><span className="movie-details-title">{tvDetails.title}</span><span> ⭐ </span><span className="rating">{Math.round(tvDetails.vote_average * 10) / 10}</span></h1>
              <p>{tvDetails.overview}</p>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

export default TVSeriesDetails;