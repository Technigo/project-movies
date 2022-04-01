import React from 'react'
import { Link } from 'react-router-dom'

const Error = ({ StyledButton }) => {
    return (
        <div>
            <Link to="/"><StyledButton>Back to movies</StyledButton></Link>
            <h2>This page does not exist!</h2>
            <h3>Click on the button above to go back.</h3>
        </div>
    )
}

export default Error
