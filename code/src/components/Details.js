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
            .then(data => setDetails(data))
    }, [])

    return (
        <div>{details.title}</div>
    )
}

export default Details