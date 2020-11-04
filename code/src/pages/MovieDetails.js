import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
    const { id } = useParams()
    const [details, setDetails] = useState([])

    const MOVIE_DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=0677b30458d017f7d0769e3f86ddb54e&language=en-US`

    useEffect(() => {
        fetch(MOVIE_DETAIL_URL)
        .then((response) => response.json())
        .then((json) => setDetails(json))
    }, [] ) 

    return (
        <section className='movie-details'>
            <img className='backdrop-image' src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt={''}></img>
            <p className='movie-text'>{details.overview}</p>
            <img className='small-image' src={`https://image.tmdb.org/t/p/w342${details.poster_path}`}></img>
        </section>
    )
}