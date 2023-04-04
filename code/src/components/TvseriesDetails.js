
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TV_SERIES_DETAILS_URL } from 'utils/urls';

export const TvseriesDetails = () => {
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const onBackButtonClick = () => {
    navigate(-1);
  }

  useEffect(() => {
    fetch(TV_SERIES_DETAILS_URL(id))
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => alert(error, 'error'))
      .finally(() => setLoading(false));
  }, [id])

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading..</h2>
      </div>
    );
  }

  return (
    <div className="tvDetailsWrapper">
      <img
        className="tv-imge-backdrop"
        src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`}
        alt="poster" />

      <button className="backBtn" type="button" onClick={onBackButtonClick}>⬅ Back</button>

      <div className="tv-detailsBox">
        <div className="poster">
          <img className="posterImg" src={`https://image.tmdb.org/t/p/w300${details.poster_path}`} alt="profile" />
        </div>
        <div className="title">
          <h2>{details.name}</h2>
          <div className="rating">
            <span>{(Math.round(details.vote_average * 10) / 10)}⭐</span>
          </div>
          <div className="summary">
            <p>{details.overview}</p>
          </div>
        </div>
      </div>

    </div>
  )
}