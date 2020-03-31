import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
    const { movie_id } = useParams()
    const apiKey = "9eb10b1ac1ea6b4cccef611cbd68f8fc"

    
useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`)
        .then((res) => res.json())
        .then((json) => {
        console.log(json)
        })
    }, [movie_id])

    return (
        <div>Movie details!</div>
    )
}