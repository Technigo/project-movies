import React from "react"
import { Link } from "react-router-dom"

const HomeButton = () => {
    return (
        <Link to="/" className="home-button-container">
            <button className="home-button">
                <img src="/icons/arrow-left-circle.svg" alt="arrow-icon" className="home-icon" />
                <span>Back to main page</span>
            </button>
        </Link>
    )
}
export default HomeButton