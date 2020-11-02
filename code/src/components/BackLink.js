import React from 'react'
import {Link} from 'react-router-dom'

export const BackLink = () => {
    return(
    <Link to="/" className="back-link">Back to movies</Link>
    )
}