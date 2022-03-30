import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=27e8fb9e6ffba8008ad2d8ac7babadb3&language=en-US`)
            .then(res => res.json())
            .then(json => {
                setMovie(json)
            })
    }, [id])

    return (
        <div key={movie.id} >
            <h1>{movie.title}</h1>
        </div>
    )
}
