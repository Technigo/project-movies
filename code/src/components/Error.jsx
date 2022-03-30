import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <Link to="/"><img role="button" src="" alt="error button" /></Link>
            <h2>This page does not exist!</h2>
            <h3>Click on the icon above to go back.</h3>
        </div>
            
    )
}

export default Error