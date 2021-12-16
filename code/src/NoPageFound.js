import React from "react";
import { Link } from "react-router-dom";
import page404 from "./images/page404.mp4";

const NoPageFound = () => {
  return (
    <div className="pageNotFoundContainer">
      <div className="imgPageNotFound">
        <video autoPlay loop muted src={page404} alt={"no page found"} />
      </div>

      <div className="textPageNotFound">
        <h2> Sorry page not found...</h2>
      </div>
      <div className="buttonPageNotFound">
        <button>
          <Link className="linkPageNotFound" to="/">
            Go back
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NoPageFound;
