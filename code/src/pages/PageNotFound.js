import React from 'react'

import '../style/pageNotFound.css'


const PageNotFound = (errorMessage) => {
  return (
    <div className="page-not-found">
      {/* <img className="error-image" src="./404-error.jpg" alt="page not found" /> */}
      <p className="error-type">404</p>
      <p className="error-title">PAGE NOT FOUND</p>
      <p className="error-message">The page you are looking for does not exist or unavailable. Please try again with the corrent path</p>
      <button className="button-on-error">HOME</button>
    </div>
    );
}
 
export default PageNotFound;