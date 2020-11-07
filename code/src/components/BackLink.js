import React from 'react'
import {Link} from 'react-router-dom'

export const BackLink = () => {
    return(
        <Link to="/" className="back-link">
            <img className="back-arrow" alt="Back to movies" src={require("../assets/BackArrow.svg")}/> 
            Movies
        </Link>
    )
}