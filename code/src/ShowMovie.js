import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Route, Link} from 'react-router-dom'

import { BackButton } from 'BackButton'

export const ShowMovie = () => {
    const { id } = useParams()
    const [details, getDetails] = useState({})

    useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=eb281b7f8ece67c3b577de3061fe96e1&language=en-US`)
    .then((response) => {
        return response.json()
    })
    .then((text) => {
        getDetails(text)
    })
    .catch((error) => {
        console.error('Request failed', error)
    })
    }, [])

    return  (
        <div style={{ backgroundImage: `URL(https://image.tmdb.org/t/p/w1280/${details.backdrop_path})` }} className="backdrop-container">
                <div className="button-container">
                    <Route path="/:id" exact>
                        <Link to="/">
                            <BackButton />
                        </Link>
                    </Route>
                </div>
            <div className="movie-details-container">
                <div className="movie-details">
                <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} className="poster"/>
                    <div className="details">
                        <h1>{details.original_title}</h1>
                        <p className="rating">Rating: {details.vote_average} / 10</p>
                        <p>"{details.tagline}"</p>
                        <p>{details.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}