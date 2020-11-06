import React from 'react';

import { BackButton } from '../components/BackButton';

import '../styles/NotFound.css';

export const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <BackButton path="/" text="Movies" />
      <h1>Sorry, can't find what you are looking for. </h1>
    </div>
  );
};
