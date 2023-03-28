/* eslint-disable linebreak-style */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate()
  const onHomeButtonClick = () => {
    navigate('/');
  }
  return (
    <div>
      <p>Sorry, we can´t find the movie you are looking for</p>
      <button className="home-button" type="button" onClick={onHomeButtonClick}>Return to home page</button>
    </div>)
}