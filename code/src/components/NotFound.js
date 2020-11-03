import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <h1>Movie not Found</h1>
      <Link to="/" exact="true">
        <p>Back to Movies List</p>
      </Link>
    </>
  )
};