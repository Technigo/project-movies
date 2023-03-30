import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { movieName } = useParams();

  useEffect(() => {
    console.log('params', params);
  }, [params, movieName]);
  const onGoToNotFoundButtonClick = () => {
    navigate('/404');
  }
  return (
    <div>
      <h2> I am the Details component </h2>
      <button type="button" onClick={onGoToNotFoundButtonClick}>Go to NotFound</button>
    </div>)
}

export default Details;