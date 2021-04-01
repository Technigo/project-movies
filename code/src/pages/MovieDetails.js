import React, { useEffect, useState } from 'react'
import {useParams, Link} from "react-router-dom"
import { BackIcon } from "./icons/Back"
import "./MovieDetails.css"

const MovieDetails = () => {
    const {id}= useParams();
    const [poster, setPoster]= useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=861b3e525c686b0bf8dcb25d1d1213f6&language=en-US`)
        .then((res) => res.json())
        .then((json) => {
            setPoster(json)
        })
    }, [id])

    return (
        <>
            <section className="movie-details" /* style={{backgroundImage: `url({https://image.tmdb.org/t/p/original${poster.backdrop_path})` }} */> 
                <img className="movie-image-background" alt="background"src={`https://image.tmdb.org/t/p/w1280${poster.backdrop_path}`} />
                <Link to="/" className="backLink">
                    <BackIcon /> 
                </Link>
                <img className="movie-image-poster" alt="poster"src={`https://image.tmdb.org/t/p/w300${poster.poster_path}`} />
                <div className="movie-title-container">
                <h2 className="movie-title">{poster.original_title}<span className="vote-average">{`${poster.vote_average} /10`}</span></h2> 
                </div>
                <p className="movie-overview">{poster.overview}</p>
            </section>
        </>
    )
}

export default MovieDetails