import React from 'react'

import { Link } from 'react-router-dom'

import "./NotFound.css"

const NotFound = () => {
    return(
        <section className="not-found-section">
            <h1>Oops, there seems to be something wrong here. Couldn't find what you were looking for!</h1>
            <p>Let's head on back to the start and browse a few more movies, shall we?</p>
            <Link to="/">
                <p className="not-found-link">Grab the popcorn &gt;&gt;</p>
            </Link>
        </section>
    )
}

export default NotFound