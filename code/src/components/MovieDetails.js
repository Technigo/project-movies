import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MovieBackground } from './MovieBackground'
import { NotFound } from 'pages/NotFound'
import { GoBack } from 'components/GoBack'
import './movieDetails.css'


export const MovieDetails = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=588b25e1c43b79eebc0f7d2f0c56a882&language=en-US`)
            .then(res => res.json())
            .then(json => {
                if (json.status_code === 34) {
                    setError(true)
                } else {
                    setMovie(json)
                }
                setLoading(false)
            })
    }, [id])

    if (error) {
        return <NotFound />
    }

    if (loading) {
        return <h1>LOADING</h1>
    }

    return (
        <section className="movieDetail">
            <GoBack />
            <MovieBackground movie={movie} />
        </section >
    )
}