import React from 'react'
import { Route, useParams, Link } from "react-router-dom";
import "./nav.css";

export const Nav = () => {
  const { movieId } = useParams();
  return (
    <nav>
      {/* Did not have time to figure out how to access the right paths for this.
      <Route path="/movies">
        <Link to={`/${sorting}`}>
          <h1>Home</h1>
        </Link>
      </Route>
      <Route path="/similar">
        <Link to={`/movies/${movieId}`}>
          <h1>Back to movie</h1>
        </Link>
      </Route> */}
      <Link to="/">
        <h1>Popular</h1>
      </Link>
      <Link to="/top">
        <h1>Top Rated</h1>
      </Link>
      <Link to="/new">
        <h1>New releases</h1>
      </Link>
    </nav>
  )
}
