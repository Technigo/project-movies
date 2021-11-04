import React from 'react';
import { NavLink, Route } from 'react-router-dom'
import './nav.css';


export const Nav = () => {
    return (
        <header className="header-container">
            <h1 className="header-title">Popular movies</h1>
            <h2 className="header-subtitle">The latest and more popular movies in US!</h2>
            <Route path="/movie-details">
                <NavLink exact to="/" className="header-back">
                    <i className="fas fa-chevron-circle-left"></i>Home
                </NavLink>
            </Route>
        </header>
    )

}
