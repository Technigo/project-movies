import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieInfo = () => {
    const { movieId } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=3812b9925d12c2723ac148f3607b8bb5&language=en-US`)
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
        })
    }, [movieId])

    return(
        <div>Movie Info</div>
    )
}