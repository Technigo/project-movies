import React from 'react'
import { NavLink } from 'react-router-dom';

import '../styles/Nav.css'
import MovieIcon from 'icon/icon.png'

export const Nav = () => {
    return (
        <header className="movie-header">
            <img src= {MovieIcon} alt="star icon" className="movie-icon" />
            <h1 className="heading">MOVIE SEARCH</h1>
            <section className="header-links">
            <NavLink to="/" exact className="nav-link">
                <p>Popular</p>
            </NavLink>
            <NavLink to="/upcoming" exact className="nav-link">
                <p>Upcoming</p>
            </NavLink>
            <NavLink to="/toprated" exact className="nav-link">
                <p>Toprated</p>
            </NavLink>
            <NavLink to="/playingnow" exact className="nav-link">
                <p>Now Playing</p>
            </NavLink>
            </section>
        </header>
    )
}