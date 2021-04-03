import React from "react"

import HomePath from "../components/HomePath"

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h2>This is not the movie you are looking for!</h2>
            <HomePath />
        </div>
    )
}

export default NotFound