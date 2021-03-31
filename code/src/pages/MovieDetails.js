import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


//import { URL_DETAILS } from 'reusable/urls'

export const MovieDetails = () => {
    const [movie, setMovie] = useState()
    const  { movieId } = useParams()
    
        useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=924dbd67b3c8f99e4b2b0ba2532c80fe&language=en-US`)
        .then((res) => res.json())
        .then((json) => {
            setMovie(json)
            console.log(json.title)
        })
    }, [movieId])

    return (
        <article>
       { movie && (
        <div className="heroImage sideCrop">
            <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
        <div className="cardImage">
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
        </div>
        <Link className="homeLink" to="/"> 
            <p>Back</p>
        </Link>
        <div className="movieDetails">
        <h1>{movie.title}</h1>
        <p className="votes">{movie.vote_average}/10</p>
        <p className="movieOverview">{movie.overview}</p>
        </div>
        </div> 
       )}
       </article>           
    )
}