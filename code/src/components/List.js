/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

export const List = ({ movieList }) => {
  return (
    <div className="list">
      {movieList.map((movie) => {
        return (
          <Link
            key={movie.id}>kakakakak
          </Link>
        )
      })}

    </div>

  );
}

