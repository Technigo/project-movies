import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"

import { apiKey } from "key"
import "./moviesDetails.css"
import Arrow from "../assets/arrow.svg"

export const MoviesDetails = () => {
    const { movieId } = useParams();
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const movieDetailsURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
        fetch(movieDetailsURL)
            .then((res) => res.json())
            .then((json) => {
                setMovies(json)
            })
            .catch((error) => {
                console.error('Bad request', error)
            })
    }, [movieId])

    return (
        <>
            <div className="movie" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 100%), movieDetailsURL(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` }}>
                <Link className="back-link" to="/" exact='true'>
                    <img className="back-arrow" src={Arrow} alt="go back to movies" />Movies list
                </Link>
                <div className="movie-details">
                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/w780/${movies.poster_path}`} alt={movies.original_title} />

                    <div className="details-container">
                        <h2>{movies.original_title}
                            <span className="movie-rating">{`${movies.vote_average} / 10`}</span></h2>
                        <p className="movie-overview">{movies.overview}</p>
                    </div>
                </div>
            </div>
        </>
    )
}