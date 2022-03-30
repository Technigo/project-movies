import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
    const navigate = useNavigate()
    const onHomeButtonClick = () => {
        navigate('/')
    }

    return(
        <div>
            <p>Sorry this page not found</p>
            <button onClick={onHomeButtonClick}>Go homepage</button>
        </div>
    )
}

export default NotFound