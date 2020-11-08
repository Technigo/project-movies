import React from "react";
import { Link } from "react-router-dom";

import '../css/notFound.css';

export const NotFound = () => {
  return (
    <div className="not-found">
      <div className="text-container">
      <p>Oh dear, this movie doesn't exist yet.</p>
      <p>Please have a look at one of the movie lists above.</p>
      </div>
      {/* <Link to="/">
        <p>&raquo;</p>
      </Link> */}
    </div>
  );
};
