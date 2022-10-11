import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
  const { movieName } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(movieName);
  });
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <p>I am the Movie Deatails component</p>
      <button type="button" onClick={goBack}>
        {' '}
        Go back{' '}
      </button>
    </div>
  );
};

export default Details;
