import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './MovieDetails.css'

export const MovieDetails = () => {
    const { movieID } = useParams()
    const [movieDetails, setMovieDetails] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=b230af0ba5dd0959429a398c958e6e4e&language=en-US&page=1`)
            .then((response) => response.json())
            .then((json) => {
                setMovieDetails(json);
            })
    }, [movieID]);

    return (
        <div className="movieContainer">
                <>
                
                <div className="movieDetails1">
                    <img className="movieDetailsThumbnail" src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt="{movieDetails.title}" />
                </div>
                    <div className="movieDetails2">
                        <h2 className="movieTitle2"> {movieDetails.title}</h2>
                            <p className="averageVote"> {movieDetails.vote_average} / 10 </p>
                                <p className="movieDescription"> {movieDetails.overview} </p>
                    </div>
                </>
        </div>
        
    )
}