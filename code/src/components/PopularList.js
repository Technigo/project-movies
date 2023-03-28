/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PopularList = () => {
  return (
    <section className="movies">
      {{ list }.map((movie) => (
        <Link key={movie.name} to={`/movies/${movie.name}`}>
          <Movie name={movie.name} image={movie.image} />
        </Link>
      ))}
    </section>
  )
}