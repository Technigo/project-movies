import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
const { movieId } = useParams()

useEffect(() => {
fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=3c9451d52520351f0a27222d2fb5cbb2&language=en-US`)
    .then((res) => res.json())
    .then((json) =>{
        console.log(json)
    })
}, [movieId])
    return (
        <div>Details</div>
    )
}