import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const onHomePageRedirect = () => {
    history.push("/");
  };

  return (
    <div className="not-found-wrapper">
      <button className="home-button" onClick={onHomePageRedirect}>
        Home page
      </button>
      <div className="error-text-wrapper">
        <p className="error-text">Sorry, this page doesn't exist!</p>
      </div>
    </div>
  );
};

export default NotFound;
