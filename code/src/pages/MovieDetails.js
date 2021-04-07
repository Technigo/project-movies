import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'

import { MOVIE_URL, POSTER_URL, BACKDROP_URL } from '../utils/urls'
import Loader from '../components/Loader'
import HomePath from "../components/HomePath"

const MovieDetails = () => {
    const { id } = useParams()
    const history = useHistory()
    const [movieDetails, setMovieDetails] = useState()

    useEffect(() => {
        fetch(MOVIE_URL(id))
            .then(res => res.json())
            .then(data => {
                if (data.status_message) {
                    history.push("/notfound")
                } else {
                    setMovieDetails(data)
                }
            })
    }, [id, history])

    if (movieDetails === undefined) {
        return (<Loader />)
    }

    return (
        <div className="movie-details-container" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(${BACKDROP_URL(movieDetails.backdrop_path)})` }}>
            <HomePath />
            <div className="movie-details-summary">
                <img className="movie-details-poster" src={POSTER_URL(movieDetails.poster_path)} alt={movieDetails.title} />
                <div className="movie-details">
                    <h2>{movieDetails.title}</h2>
                    <span className="movie-details-rating">{movieDetails.vote_average}/10</span>
                    <p>{movieDetails.overview}</p>
                    <Link to={`/cast/${movieDetails.id}`}><span>See the cast</span><img src="/icons/arrow-right-circle.svg" alt="arrow-icon" className="right-icon" /></Link>
                </div>
            </div>
        </div >
    )
}

export default MovieDetails