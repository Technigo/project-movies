import React from 'react'
import { Link } from 'react-router-dom';


export const NotFound = () => {
  return (
    
    <div className="error">   
      <h4>Oh No, we could not fint that movie... </h4>   
      <img className="error-image" src="https://media3.giphy.com/media/xT1XGNBg6LzR3Wqu9G/source.gif" alt="angry birds eating popcorn" />
        <Link to="/" exact="true">
          <button className="error-button" type="button"> Go Back</button>
        </Link>
    </div>         
  )
}

