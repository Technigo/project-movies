import React from 'react';
import { useNavigate } from 'react-router-dom';
import notfound from '../images/notfound.png';
// import backbutton from '../images/clapperboard-solid.svg';

const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  }
  return (
    <div className="notFound">
      <button className="backButton" type="button" onClick={onHomeButtonClick}>Back</button>
      <img className="movie-dog" src={notfound} alt="Movie dog" />
    </div>
  )
};

export default NotFound;

/* <img className="icon" src={backbutton} alt="back to movies" /> */