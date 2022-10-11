
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieName } = useParams();
  const navigate = useNavigate();
  useEffect(() => {

  })
  const goBack = () => {
    navigate(-1);
  }
  return (
    <div>
      <p>Details</p>
      <button type="button" onClick={goBack}>Go back</button>
    </div>
  )
}

export default MovieDetails