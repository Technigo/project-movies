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
                <img className='background' src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/>
                <div className='posteranddetails'>
                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
                    <div className='overlay-content'>
                        <div className='title-score'>
                            <h1>{movie.original_title}</h1>
                            <p>{movie.vote_average}/10</p>
                        </div>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MovieDetails 
