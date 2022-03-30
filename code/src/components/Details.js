import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { SINGLE_MOVIE_URL } from "utils/urls"

const Details = () => {

    const [details, setDetails] = useState({})

    //renamed to movieId for clarity. Also, sent it as an argument to the fetch function.
    const { movieId } = useParams()

    useEffect(() => {
        fetch(SINGLE_MOVIE_URL(movieId))
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setDetails(data))
            // console.log(data)
    }, [])

    return (
    <div>
        <div>{details.title}</div>
        <div>{details.vote_average}</div>
        <div>{details.overview}</div>
        <img src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} /> 
        <img src={`https://image.tmdb.org/t/p/w1280/${details.backdrop_path}`} /> 
    </div>
    
    )
}

export default Details