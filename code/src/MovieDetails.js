import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './MovieDetails.css'

export const MovieDetails = () => {
    const { movieID } = useParams()
    const [movieDetails, setMovieDetails] = useState({}) // curly brackets because it's an object we're getting from the fecth

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=b230af0ba5dd0959429a398c958e6e4e&language=en-US&page=1`)
            .then((response) => response.json())
            .then((json) => {
                setMovieDetails(json);
            })
    }, [movieID]);

    return (  
        <div className="movie-container"
            style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`}}
            alt={`${movieDetails.title}`}>
                <Link to="/">
                    <div className="button">
                        <p className="button-text"><span className="icon" role="img" aria-label="icon">⬅️ </span> Movies</p>
                    </div>
                </Link> 

                <div className="summary">
                    <img className="movie-details-thumbnail"
                        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                        alt={movieDetails.title} />

                    <div className="movie-details2">
                        <h2 className="movie-title"> {movieDetails.title} <span className="average-vote">{movieDetails.vote_average}/10 </span></h2>
                                <p className="movie-description"> {movieDetails.overview} </p>
                    </div>
                </div>       
        </div>
        
    )
}