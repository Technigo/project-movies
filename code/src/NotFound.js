import React from 'react'
import { Link } from 'react-router-dom'

import "./pages/notFound.css"


export const NotFound = () => {
    return (
        <div className="not-found">
            <h4>Oh no, we can't find that movie.</h4>
            <img src="https://media.giphy.com/media/l2JehQ2GitHGdVG9y/source.gif" alt="homer simpson lost" />
            <h3>Why don't you go back and check out our movies list, a perfect inspiration for a cozy night!</h3>
            <Link to="/">
                <p className="error-message">Go back home</p>
            </Link>
        </div>
    );
};