import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../components/Arrow.svg";
export const Button = () => {
  return (
    <section className="backWrapper">
      <Link to="/">
        <div
          className="back-to-list"
          tabIndex="0"
          role="button"
          aria-pressed="false"
        >
          <span>
            <Arrow />
          </span>
          Back to movies
        </div>
      </Link>
    </section>
  );
};
