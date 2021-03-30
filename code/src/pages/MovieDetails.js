import React, { useEffect, useState } from 'react'
import {useParams, Link} from "react-router-dom"
import { BackIcon } from "./icons/Back"
const MovieDetails = () => {
    const {id}= useParams();
    const [poster, setPoster]= useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=861b3e525c686b0bf8dcb25d1d1213f6&language=en-US`)
        .then((res) => res.json())
        .then((json) => {
            setPoster(json)
        })

    }, [])

    return (
    <section className="movie-details"> 
    <Link to="/" className="backLink">
        <BackIcon /> 
      </Link>
    <img src={`https://image.tmdb.org/t/p/w1280${poster.backdrop_path}`} />
    <img src={`https://image.tmdb.org/t/p/w300${poster.poster_path}`} />
    <h1>{poster.original_title}</h1> <p>{poster.vote_average}</p>
    <p>{poster.overview}</p>
    </section>
    )
}

export default MovieDetails