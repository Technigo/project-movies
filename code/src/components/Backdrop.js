import React from "react";

import "./Backdrop.css";

const Backdrop = (props) => {
  const baseUrl = "https://image.tmdb.org/t/p/w1280/";
  let styling = {};
  if (props.details.backdrop_path) {
    styling = {
      backgroundImage: "url(" + baseUrl + props.details.backdrop_path + ")",
    };
  } else {
    styling = {
      backgroundImage: "none",
    };
  }
  return (
    <div style={styling} className='backdrop'>
      <div className='overlay'></div>
    </div>
  );
};

export default Backdrop;
