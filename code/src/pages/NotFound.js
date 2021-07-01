import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className='wrapper notfound'>
      <div className='content'>
        <h1>404</h1>
        <p>
          Sadly, the page you are looking for doesn't exist. Please try again.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
