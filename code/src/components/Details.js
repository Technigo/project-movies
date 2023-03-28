import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Details = () => {
  const navigate = useNavigate();
  const { movieName } = useParams();

  useEffect(() => {
    console.log('movieName', movieName);
  }, [movieName]);

  return (
    <div>
      <h1>🎬 I am details component 🎬</h1>
      <button type="button" onClick={() => navigate('/404')}>
        Go to NotFound
      </button>
    </div>
  );
};
