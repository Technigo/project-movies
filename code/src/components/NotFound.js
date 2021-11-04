import React from 'react';
import { useHistory } from 'react-router-dom';

import "../components/NotFound.css"


const NotFound = () => {
  const history = useHistory();

  const onButtonBackClick = () => {
    history.goBack();
  }


return (
  <div>
    <h1 className="404-text">404 - Not Found!</h1>
    <div class="wrapper">
    <button className="back-btn-404" onClick={onButtonBackClick}><span> Let's go back on pop som popcorn </span><span className="popcorn" role="img" arial-label="Popcorn">{"🍿"}</span></button>  
  </div>
  </div>

)
}


export default NotFound;