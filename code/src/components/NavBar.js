import React from 'react';
import { Route, Link } from 'react-router-dom';
import 'components/navbar.css'

export const NavBar = () => (

  <header className="navbar">

    {/* HOMEPAGE */}
    <Route path="/" exact>
      <p>Most Popular Movies</p>
      <Link to="/top_rated" exact>
        <p>Top Rated</p>
      </Link>
    </Route>

    {/*DETAILS PAGE*/}
    <Route path="/movies">
      <Link to="/" exact>
        <p><span className="back-arrow">◁ </span>Back to Homepage</p>
      </Link>
    </Route>

    {/* TOP RATED PAGE */}
    <Route path="/top_rated">
      <Link to="/" exact>
        <p>Most Popular Movies</p>
      </Link>
      <p>Top Rated</p>
    </Route>
  </header>
)