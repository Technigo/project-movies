import React from 'react'
import { Route, Link } from "react-router-dom";
import "./nav.css";

export const Nav = () => {
  return (
    <nav>
      <h1>Popular</h1>
      <h1>Top Rated</h1>
      <h1>Newest</h1>
      <h1>Genres</h1>
      <Route path="/movies">
        <Link to="/">
          Back to popular
        </Link>
      </Route>
    </nav>
  )
}
