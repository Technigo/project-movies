import React from "react"
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h2>This is not the movie you are looking for!</h2>
            <Link to="/" className="back-container">
                <img src="/icons/arrow-left-circle.svg" alt="arrow-icon" className="back-icon" />
                <span>Back to main page</span>
            </Link>
        </div>
    )
}

export default NotFound