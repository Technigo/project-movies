import React from 'react';
import { useHistory } from 'react-router-dom';

import "../components/NotFound.css"


const NotFound = () => {
  const history = useHistory();

  const onButtonBackClick = () => {
    history.push('/');
  }


return (
  <div>
    <div className="wrapper-404">
    <h2 className="404-text">404 - Not Found!</h2>
    <button className="back-btn-404" onClick={onButtonBackClick}><span> Let's go back and pop some popcorn </span><span className="popcorn" role="img" arial-label="Popcorn">{"🍿"}</span></button>  
  </div>
  </div>

)
}


export default NotFound;