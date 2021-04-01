import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <section className="error-container">
      <h1 tabIndex='0' className="movie-time-title error-title">MovieTime</h1>
      <h1 tabIndex='0' className="error-text"><span className="oops">Oops!</span> Something went wrong..</h1>
      <Link className="return error-return" to="/">
        <i className="fas fa-chevron-circle-left"></i>
        <span className="return-text">back to movies</span>
      </Link>
    </section>
  )
}