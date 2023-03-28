import React from 'react';
import { Link } from 'react-router-dom';

export const MovieList = ({ movieList }) => {
  return (
    <>
      {movieList.map((singleMovie) => {
        return (
          <p key={singleMovie.id}>
            <Link to={`/details/${singleMovie.title}`}>Go to {singleMovie.title} details </Link>
          </p>
        )
      })}
    </>
  )
}