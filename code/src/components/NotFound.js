/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import workingInProgress from '../workingInProgress.png';
import { MovieList } from './MovieList';

export const NotFound = () => {
  // tried to make back button from 404 error
  // const navigate2 = useNavigate();
  // useEffect(() => {
  //   console.log('button2');
  // });
  // const goBack2 = () => {
  //   <MovieList />
  //   console.log('navigate', goBack2)
  // }
  return (
    <div className="notFound">
      <h2> OBS! It look like you got lost...... </h2>
      <h3>404 PAGE NOT FOUND</h3>
      <img src={workingInProgress} alt="working" />
      <button type="button" onClick> 👈🏼 Movies </button>
    </div>
  )
}