import React from "react";
import { useHistory } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const history = useHistory();

  const onHomePageRedirect = () => {
    history.push("/");
  };

  return (
    <div className="error-wrapper">
      <p className="notfound-text">Oh no!!! This page doesn't exist</p>
      <button className="notfound-button" onClick={onHomePageRedirect}>
        Back to the home page
      </button>
    </div>
  );
};

export default NotFound;
