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
            .then(json => setDetails(json))
            .catch(err => console.error(err))
    }

    useEffect(() => {     
        fetchMovieDetails()   
    }, [MOVIE_DETAIL_URL])

    return (
        <div className="movie-page">
            <ButtonBack />
            <img className="background-image" src={MOVIE_BACKDROP(details.backdrop_path)} />
            <div className="details-overlay">
                <img className="poster-image" src={MOVIE_BACKDROP(details.poster_path)} />  
                <div className="details-overlay-text">
                    <h1 className="movie-header">{details.title}
                        <span className="movie-vote">{details.vote_average}/10</span>
                    </h1>
                    <p className="movie-description">{details.overview}</p>
                </div>
            </div>
        </div> 
    )
}