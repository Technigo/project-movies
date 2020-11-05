import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { apiKey } from "key"

export const MoviesDetails = () => {
    const { movieId } = useParams()
    const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
            })
    }, [movieId])

    return (
        <div>movies</div>
    )
}