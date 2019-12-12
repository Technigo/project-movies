import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
    const [details, setDetails] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ac808c841b715d85c8914a97d10f4cb3&language=en-US&page=1`)
            .then(res => res.json())
            .then(json => {
                setDetails(json)
            })
    }, [id])

    return (
        <div>
            <h1>{details.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} />
        </div >
    )
}

