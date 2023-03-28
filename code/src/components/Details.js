import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SINGLE_MOVIE_URL } from 'utils/urls';

export const Details = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(SINGLE_MOVIE_URL(id))
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }, [id])

  const onGoToNotFoundButtonClick = () => {
    navigate('/404');
  }
  return (
    <div>
      <h2> This is the Details component for the movie {movie.title} </h2>
      <button type="button" onClick={onGoToNotFoundButtonClick}>Go to NotFound</button>
    </div>)
}

export default Details;