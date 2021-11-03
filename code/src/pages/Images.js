import React from 'react'

import { IMAGES_URL } from '../utils/urls'

const Images = () => {

    fetch(IMAGES_URL)
    .then ((res) => res.json())
    .then ((json) => {
        console.log(json.images)
    })

    return (
    
        <div>
        <p>lala</p>
        </div>
    )
}

export default Images