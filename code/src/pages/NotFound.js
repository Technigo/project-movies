import React from "react"
// import { Link } from 'react-router-dom'

import HomeButton from "../components/HomeButton"

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h2>This is not the movie you are looking for!</h2>
            <HomeButton />
        </div>
    )
}

export default NotFound