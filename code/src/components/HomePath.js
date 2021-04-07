import React from "react"
import { Link } from "react-router-dom"

const HomePath = () => {
    return (
        <Link className="home-path" to="/">
            <img src="/icons/arrow-left-circle.svg" alt="arrow-icon" className="home-icon" />
            <span>Back to main page</span>
        </Link>
    )
}

export default HomePath