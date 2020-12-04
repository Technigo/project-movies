import React, { useEffect, useState } from 'react'
import { useParams, Link} from "react-router-dom"

import { apiKey } from "key"
import "./moviesDetails.css"
import Arrow from "../assets/arrow.svg"

export const MoviesDetails = () => {
    const { movieId } = useParams();
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const movieDetailsURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
        fetch(movieDetailsURL)
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                setMovies(json)
                setLoading(false)
            })
            .catch((error) => {
            })
    }, [movieId, loading])

    //The brackets are here because VS code was complaining and giving me an error when I didn't have them :)
    if (!movies.id) {
        return (

            <div className="not-found">
                {loading && <div className="loader" />}
                {}
                <h3>Movie not found, probably because you searched for a non existing one.</h3>
                <h4>But check out the movies we do have, just go back.</h4>
                <Link to="/">
                    <p className="error-message">Go back home</p>
                </Link>
            </div>
        )
    }

    return (

        <div className="movie" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 10%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` }}>
            <Link className="back-link" to="/">
                <img className="back-arrow" src={Arrow} alt="go back to movies" />Movies list
                </Link>
            <div className="movie-details">
                <img className="movie-poster" src={`https://image.tmdb.org/t/p/w780/${movies.poster_path}`} alt={movies.original_title} />

                <div className="details-container">
                    <h2>{movies.original_title}
                        <span className="movie-rating" >{`${movies.vote_average} / 10`}</span></h2>
                    <p className="movie-overview">{movies.overview}</p>
                </div>
            </div>
        </div>
    )
}
