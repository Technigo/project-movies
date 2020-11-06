import React from "react"; 
import { Link } from "react-router-dom"; 

import BirdGif from "../assets/bird.gif";

export const NotFound = () => {
  return (
    <div className="not-found"> 
      <h1>Oooops!</h1>
      <h2>We couldn't find the movie you're looking for  <span role="img" aria-label="ups emoji"> {"🧐"} </span></h2>
      <img className="bird-gif" src= {BirdGif} alt= "bird gif"/>
      <h3> Get that Popcorn popping and check our Movies List</h3>
      <Link className="back-link" to ="/" exact='true'>
        <h4 className="back-not-found">
          <span role="img" aria-label="popcorn emoji"> {"🍿"} </span>
            Back to Movies
          <span role="img" aria-label="popcorn emoji"> {"🍿"} </span>    
        </h4>
      </Link>
    </div>
  );
};