/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import workingInProgress from '../workingInProgress.png';
import { MovieList } from './MovieList';

export const NotFound = () => {
  // ANOTHER WAY TO MAKE BUTTON RETURN TO MAKE PAGE USING onCLick=(redirect)
  // const navigate2 = useNavigate()
  // const redirect = () => {
  //   console.log('click', redirect);
  //   navigate2('/')
  // }
  return (
    <div className="notFound">
      <h2> OBS! It look like you got lost! </h2>
      <h3>404 PAGE NOT FOUND</h3>
      <img src={workingInProgress} alt="working" />
      <Link to="/">
        <button
          type="button"> 👈🏼 Go back to movies
        </button>
      </Link>

    </div>
  )
}