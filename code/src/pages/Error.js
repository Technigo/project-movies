import React from 'react'

import BackButton from '../components/BackButton'



const Error = () => {

    const ErrorPic = "../assets/error.jpg"

    return (
        <div className="error"
        // style={{
        //     backgroundImage: `url(${ErrorPic})`
        // }}
        >
            
            <BackButton />
            <h1>THERE HAS BEEN ERROR <label>😞</label></h1>
        </div>
    )
}

export default Error