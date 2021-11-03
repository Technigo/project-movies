import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();

  const onButtonBackClick = () => {
    history.goBack();
  }


return (
  <div>
    <h1>404 - Not Found!</h1>
    <button className="back-btn" onClick={onButtonBackClick}>Back</button>
  </div>
)
}


export default NotFound;