import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Movie Details component</h2>
    </div>
  );
};

export default MovieDetails;
