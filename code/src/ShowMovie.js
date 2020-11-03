import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


export const ShowMovie = () => {
    const { id } = useParams()
    const [details, getDetails] = useState({})
    
    console.log(id)

    useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=eb281b7f8ece67c3b577de3061fe96e1&language=en-US`)
    .then((response) => {
        return response.json()
    })
    .then((text) => {
        getDetails(text)
    })
    .catch((error) => {
        console.error('Request failed', error)
    })

    }, [])

    return  (
        <div>{details.original_title}</div>
    )
    
}