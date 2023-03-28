import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DETAILS_URL } from 'utils/urls';

export const Details = () => {
  const [movie, setMovie] = useState([])
  const { movieId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }, [movieId])

  const onGoToNotFoundButtonClick = () => {
    navigate('/404');
  }

  return (
    <div>
      <h2>I am the details for {movie.title}</h2>
      <button type="button" onClick={onGoToNotFoundButtonClick}>Go to Not Found
      </button>
      <span className="rating">{Math.round(movie.vote_average * 10) / 10}</span>
    </div>
  )
}
