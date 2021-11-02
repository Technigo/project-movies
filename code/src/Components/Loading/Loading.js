import React from "react";

import "./Loading.css";

const Loading = () => {
  return (
    <>
      <h1 className="welcome-message">
        Welcome to MovieLand{" "}
        <span role="img" aria-label="camera-emodji">
          🎥
        </span>
      </h1>
      <div className="ring">
        Loading
        <span className="spinner"></span>
      </div>
    </>
  );
};
export default Loading;
