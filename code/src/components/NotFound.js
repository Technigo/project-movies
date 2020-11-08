import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-box">
      <img
        src="https://media.giphy.com/media/26tP1TiiRIF0rLhWU/giphy.gif"
        alt="Not found gif"
      />
      <div className="back-btn">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm-1-17v4h8v2h-8v4l-6-5 6-5z" />
          </svg>
          <span>Page not found, plz go back and try again!</span>
        </Link>
      </div>
    </div>
  );
};
