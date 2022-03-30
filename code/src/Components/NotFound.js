import React from 'react'
import { useNavigate } from 'react-router-dom'


const NotFound = () => {
    const navigate = useNavigate ()
    const onHomeButtonClick = ()=>{
        navigate('/')
    }

    return (
        <>
        <p>Sorry page not found </p>
        <button onClick={onHomeButtonClick}>Home</button>
        </>
        
    )
}

export default NotFound
//<button onClick={onHomeButtonClick}>Home</button>