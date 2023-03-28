import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Details = (props) => {
  const navigate = useNavigate();
  //   const params = useParams();
  const { movieTitle } = useParams();

  useEffect(() => {
    // console.log('params', params);
    console.log('movieTitle', movieTitle);
  }, [movieTitle]);
  const onGoToNotFoundButtonClick = () => {
    navigate('/404');
  }
  return (
    <div>
      <h2>{movieTitle}<span className="rating">{props.vote_average}</span></h2>
      <p>{}</p>
      <button type="button" onClick={onGoToNotFoundButtonClick}>Go to NotFound</button>
    </div>)
}