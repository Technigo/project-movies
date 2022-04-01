import React from "react";
import BackButton from "./BackButton";

import './NotFound.css'

const NotFound = () => {
  return (
    <div className="container">
      <BackButton />
      <h2 className="notfound">Sorry, that link doesn't work :(</h2>
    </div>
  );
};

export default NotFound;
