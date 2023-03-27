import React from 'react';

import { Details } from './components/Details'

export const App = () => {
  const movieId = '603692';
  const apiKey = 'c78445f7216324dcfc408149681f2fcd'

  return (
    <div>
      <Details movieId={movieId} apiKey={apiKey} />
    </div>
  );
}
