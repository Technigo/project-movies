import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BackArrow } from 'icons/BackArrow'
import '../css/movieDetails.css'

export const MovieDetails = () => {
    const [movie, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=db6f51c353540b320755afe867179708&language=en-US`)
            .then((res) => res.json())
            .then((json) => {
                setMovie(json)
            })
    }, [id])

    return (
        <article className="movieDetails">
            <Link to="/" className="backArrow">
                <BackArrow /> Most Popular Movies
            </Link>
            {movie && (
                <div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
                    <div className="summary">
                        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                        <div className="details">
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            )}
        </article>
    )
}
