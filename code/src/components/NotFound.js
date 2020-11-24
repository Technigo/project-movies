import React from 'react'
import { Link } from 'react-router-dom'


export const NotFound = () => {

    return (
        <div className="container">
            <div className="not-found">
                <div className="not-text">404: Page Not Found</div>
            </div>
            <Link to="/" className="link">
                <button className="button">Back to home page</button>
            </Link>
        </div>
    )
}

