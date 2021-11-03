import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DETAILS_URL } from 'utils/urls'
import BackButton from './BackButton'

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
                <img className='background' src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title}/>
                <BackButton />
                <div className='posteranddetails'>
                    <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>
                    
                    <div className='overlay-content'>
                        <div className='score'>
                            <h1>{movie.original_title}<span>{movie.vote_average} / 10</span></h1>
                            {/* <p>{movie.vote_average} / 10</p> */}
                        </div>
                        <p>{movie.overview}</p>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default MovieDetails 
