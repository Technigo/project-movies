import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { apiKey } from "key"
import "./moviesDetails.css"


export const MoviesDetails = () => {
    const { movieId } = useParams()
    const [movies, setMovies] = useState([])
    const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((json) => {
                setMovies(json)
            })
    }, [movieId, URL])

    return (
        <div className="details-container" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path}) `,
        }}>
            <div className="movie-wrapper" key={movies.id}>
                <div className="summary">
                    <img src={`http://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={movies.title} />
                </div>
                <div className="movie-info">
                    <h1 className="movie-title">{movies.original_title}</h1>
                    <span className="rating">{movies.vote_average} / 10</span>
                    <p className="overview">{movies.overview}</p>
                </div>
            </div>
        </div>
    )
}