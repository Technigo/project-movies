import React from 'react'
import {Link} from 'react-router-dom'

export const Banner = () => {

    return (
        <header>
            <h1>My Movies</h1>
            {<Link to="/"><span>&#x1F3E0;</span><p>Home</p></Link>}
        </header>
    )
}