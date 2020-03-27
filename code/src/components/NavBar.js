import React from 'react';
import { Route, Link } from 'react-router-dom';
import 'components/navbar.css'

export const NavBar = () => (

  <header className="navbar">

    {/* HOMEPAGE */}
    <Route path="/" exact>
      <p className="current-page">Most Popular Movies</p>
      <Link to="/top_rated" exact>
        <p>Top Rated</p>
      </Link>
      <Link to="/now_playing" exact>
        <p>Now Playing</p>
      </Link>
      <Link to="/upcoming" exact>
        <p>Upcoming</p>
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
      <p className="current-page">Top Rated</p>
      <Link to="/now_playing" exact>
        <p>Now Playing</p>
      </Link>
      <Link to="/upcoming" exact>
        <p>Upcoming</p>
      </Link>
    </Route>

    {/* NOW PLAYING PAGE */}
    <Route path="/now_playing">
      <Link to="/" exact>
        <p>Most Popular Movies</p>
      </Link>
      <Link to="/top_rated" exact>
        <p>Top Rated</p>
      </Link>
      <p className="current-page">Now Playing</p>
      <Link to="/upcoming" exact>
        <p>Upcoming</p>
      </Link>
    </Route>

    {/* UPCOMING PAGE */}
    <Route path="/upcoming">
      <Link to="/" exact>
        <p>Most Popular Movies</p>
      </Link>
      <Link to="/top_rated" exact>
        <p>Top Rated</p>
      </Link>
      <Link to="/now_playing" exact>
        <p>Now Playing</p>
      </Link>
      <p className="current-page">Upcoming</p>
    </Route>
  </header>
)