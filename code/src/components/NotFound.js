import React from "react";
import { useHistory } from "react-router";
import "./NotFound.css";

const NotFound = () => {
  const history = useHistory();

  const onButtonHomeClick = () => {
    history.push("/");
  };

  return (
    <div className="notfound-container">
      <p>Sorry, this page doesn't exist</p>
      <button onClick={onButtonHomeClick}>Back to movies</button>
    </div>
  );
};

export default NotFound;
