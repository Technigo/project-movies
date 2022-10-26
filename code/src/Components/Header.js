import React from 'react';
import { Link } from 'react-router-dom';
import videoBg from '../Assets/header-movie2.mp4'

const Header = () => {
  return (
    <div className="header-container">
      <video className="video" src={videoBg} autoPlay loop muted />
      <Link className="go-back-link" to="/">
        <h1 className="header-title"> MOVIE TIME </h1>
        <h2 className="header-text">All your favourite movies in one place!</h2>
      </Link>
    </div>
  )
}

export default Header