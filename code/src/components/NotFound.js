import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <Link to="/" className="back-button">
                <i className="far fa-arrow-alt-circle-left"/>
                <span className="back-button-text">Go back home</span>
            </Link>
            <div className="not-found-container">
                <h1 className="not-found">NOT FOUND</h1>
                <img src="/broken-reel.png" alt="broken reel"/>
            </div>
        </div>
    )
}

export default NotFound