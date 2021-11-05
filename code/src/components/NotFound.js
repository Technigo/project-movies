import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();

  const onButtonHomeClick = () => {
    history.push("/");
  };

  return (
    <div>
      <p>Sorry, this page doesn't exist</p>
      <button onClick={onButtonHomeClick}>Back to movies</button>
    </div>
  );
};

export default NotFound;
