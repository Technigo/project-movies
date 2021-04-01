import React, {useState, useEffect} from 'react'

import { MOVIE_DETAIL_URL, MOVIE_BACKDROP } from '../components/API_URL'

import { Link, useParams } from 'react-router-dom'



export const Details = () => {
    const { id } = useParams()
        console.log(id)
    const [ details, setDetails ] = useState({})
    
    const fetchMovieDetails = () => {
        fetch(MOVIE_DETAIL_URL(id)) 
        .then(res => res.json())
        // .then(json => console.log(json))
        .then(json => setDetails(json))
        .catch(err => console.error(err))
    }


console.log(details)

    useEffect(() => {     
        fetchMovieDetails()   
    }, [])

    return (
        <main className="movie-page">
            <img src={MOVIE_BACKDROP(details.backdrop_path)} />
            <img src={MOVIE_BACKDROP(details.poster_path)} />
            <h1>{details.title}</h1>
            <p>{details.vote_average}</p>
            <p>{details.overview}</p>
        </main> 
    )
}