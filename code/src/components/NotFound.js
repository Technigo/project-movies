/* eslint-disable linebreak-style */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  }
  return (
    <section className='notfound-container'>
      <h1 className='notfound-404'>404</h1>
      <img id='notfoundIcon' src='../icons/PageNotFound.png' alt='notfound 404' />
      <h2 className='notfound-ops'> Ooooppps! </h2>
      <p> We couldn`t find the page you were looking for. May we suggest to have a look at
        our Popular movies list.
      </p>
      <button className='errorBtn' type='button' onClick={onHomeButtonClick}>Return to Popular Movies</button>
    </section>);
}
