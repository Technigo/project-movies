import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import '../index.css'

//title, rating, overview, img, backdrop
import BackButton from '../components/BackButton'
import { DETAIL_API_URL } from 'reusable/urls'

export const MovieDetails = () => {
    const { movieId } = useParams()
    const [movieDetails, setMovieDetails] = useState([])

    useEffect(() => {
        fetch(DETAIL_API_URL)
            .then((res) => res.json())
            .then(json => {
                setMovieDetails([json])
            })
    }, [movieId, DETAIL_API_URL])

    return (
        <div>
            <section>
                <BackButton />
            {movieDetails.map((details) => (
                <div key={details.id}>
                <img src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} />
                <h1>{details.original_title}</h1>
                <img src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} />
                <p>{details.overview}</p>
                <p>{details.vote_average}/10</p>
            </div>
            ))}
            </section>
        </div>
    )
}