import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'

import { API_KEY } from 'utils/urls'


const Movie = () => {
    const [movie, setMovie] = useState('')
    const {movieId} = useParams()

    const MOVIE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`

    useEffect(() => {
        fetch(MOVIE_URL)
        .then((res) => res.json())
        .then((data) => setMovie(data))
    }, [MOVIE_URL])
    
    console.log(movie)
    
    return (
        <div className="background-poster" style={{backgroundImage: movie.backdrop_path ? `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` : ''}}>
            <Link to="/" className="back-button">
                <i className="far fa-arrow-alt-circle-left"/>
                <span className="back-button-text">GO BACK</span>
            </Link>
            <div className="movie-details">
                <img
                    className="movie-poster"
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w342${movie.poster_path}` : ''}
                    alt={movie.title}
                />
                <div className='movie-summary'>
                    <h1>{movie.title}<span className="movie-rating">{movie.vote_average}/10</span></h1>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>  
    )
}

export default Movie
