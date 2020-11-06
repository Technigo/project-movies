import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {

    return (
        <header>
            <nav>
            <Link to="/trending" className="nav-links">
                Trending now
            </Link>

            <Link to="/" className="nav-links">
                Popular movies
            </Link>
            </nav>
        </header>
    );
};