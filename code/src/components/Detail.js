/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Detail = () => {
  const params = useParams()
  console.log(params)
  const movieMatch = movies.find((movie) => movie.id === params.id)
  console.log(movieMatch)
  return (
    <section>
            /*Mount movie details component*/
    </section>
  )
}