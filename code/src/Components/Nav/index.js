import React from 'react';
import './nav.css';
import { Link, Route } from 'react-router-dom'


export const Nav = () => {
    return (
        <header className="header-container">
            <h1 className="header-title">Popular movies</h1>
            <h2 className="header-subtitle">The latest and more popular movies in US!</h2>
            <Route path="/movie-details">
                <Link to="/" className="header-back">
                    <i className="fas fa-chevron-circle-left"></i>Back
                </Link>
            </Route>
        </header>
    )

}
