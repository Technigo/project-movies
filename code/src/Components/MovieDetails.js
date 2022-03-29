import React, { useState, useEffect } from "react"
import { MOVIES_API } from "./utils/urls"

const MovieDetails = () => {
    const [moviedetails, setMovieDetails] = useState([])

    useEffect(() => {
        fetchMovieDetails()
    }, [])    
    

    const fetchMovieDetails = () => {
        fetch(MOVIES_API)
            .then(res => res.json())
            .then(data => setMovieDetails(data.results))
    }

    return (
        <section className="moviedetails-wrapper">
            {moviedetails.map(moviedetail => (
                <div>
                    <img src={`https://image.tmdb.org/t/p/w1280${moviedetail.backdrop_path}`} alt=""/>
                    <img src={`https://image.tmdb.org/t/p/w154${moviedetail.poster_path}`} alt=""/>
                    <div>
                        <h1 className="movie-detail-title">{moviedetail.title}<span className="movie-rating">{moviedetail.vote_average}</span></h1>
                        <p className="movie-overview-text">{moviedetail.overview}</p>
                    </div>
                </div>
               
            ))}
        </section>
    )
}


export default MovieDetails