import React from 'react'
import { Link } from 'react-dom'

import "./pages/notFound.css"


export const NotFound = () => {
    return (
        <div className="not-found">
            <h4>Oh-huh, you are at the end of the road</h4>
            <Link to="/">
                <p className="error-message">Go back home</p>
            </Link>
        </div>
    );
};