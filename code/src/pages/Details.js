import React, {useState, useEffect} from 'react'

import { MOVIE_DETAIL_URL, MOVIE_BACKDROP } from '../components/API_URL'

import { useParams } from 'react-router-dom'

import { ButtonBack } from '../components/ButtonBack'


export const Details = () => {
    const { id } = useParams()

    const [ details, setDetails ] = useState({})
    
    const fetchMovieDetails = () => {
        fetch(MOVIE_DETAIL_URL(id)) 
        .then(res => res.json())
        // .then(json => console.log(json))
        .then(json => setDetails(json))
        .catch(err => console.error(err))
    }

    useEffect(() => {     
        fetchMovieDetails()   
    }, [])

    return (
        <div className="movie-page">
            <ButtonBack />
            <img className="background-image" src={MOVIE_BACKDROP(details.backdrop_path)} />
            <img className="poster-image" src={MOVIE_BACKDROP(details.poster_path)} />
            <div className="overlay-text">
                <h1 className="movie-header">{details.title}</h1>
                <p className="movie-vote">{details.vote_average}</p>
                <p className="movie-decripstion">{details.overview}</p>
            </div>
        </div> 
    )
}