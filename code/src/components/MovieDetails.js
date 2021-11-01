import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DETAILS_URL } from 'utils/urls'

const MovieDetails = () => {
    const [movie, setMovie] = useState ([])
    const { id } = useParams()

    useEffect(() => {
        fetch(DETAILS_URL(id))
        .then(res => res.json())
        .then(data => setMovie(data)
    )}, [id])

    return (

        <div>
            <div key={movie.original_title}>
                <img src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
                <h1>{movie.original_title}</h1>
                <h3>Released {movie.release_date}</h3>
            </div>
        </div>
    )
}


export default MovieDetails 
