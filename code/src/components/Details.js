import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { SINGLE_MOVIE_URL } from "utils/urls"

const Details = () => {

    const [details, setDetails] = useState({})
    const {movieId} = useParams()


    useEffect(() => {
    
        fetch(SINGLE_MOVIE_URL(movieId)).then(res => res.json()).then(data => setDetails(data))
    }, [])
console.log(details)
    return <div>{details.name}</div>
}

export default Details