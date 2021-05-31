import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { MOVIE_BACKDROP } from '../components/API_URL'
import { ButtonBack } from '../components/ButtonBack'

export const Details = () => {
    const { id } = useParams()
    const [ details, setDetails ] = useState({})
    const [ error, setError ] = useState('')

    useEffect(() => {  
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=84c715899a256d0ed1ae1ac98d6fb9a6&language=en-US`)
                .then(res => res.json())
                .then(json => setDetails(json))
                .catch(err => {
                    setError(err)
                })
    }, [id])

    return (
        <div className="movie-page">
            <ButtonBack />
            <img className="background-image" src={MOVIE_BACKDROP(details.backdrop_path)} alt={details.title} />
            <div className="details-overlay">
                <img className="poster-image" src={MOVIE_BACKDROP(details.poster_path)} alt={details.poster_path} />  
                <div className="details-overlay-text">
                    <h1 className="movie-header">{details.title}
                        <span className="movie-vote">{details.vote_average}/10</span>
                    </h1>
                    <p className="movie-description">{details.overview}</p>
                </div>
            </div>
            { error && <p>Something went not so great. Details {error}</p> }
        </div> 
    )
}