import React from 'react'

import '../style/pageNotFound.css'

//404 page//
const PageNotFound = (errorMessage) => {
  return (
    <div className="page-not-found">
      <p className="error-type">404</p>
      <p className="error-title">PAGE NOT FOUND</p>
      <p className="error-message">The page you are looking for does not exist or unavailable. Please try again with the corrent path</p>
      <button className="button-on-error">HOME</button>
    </div>
    );
};
 
export default PageNotFound;