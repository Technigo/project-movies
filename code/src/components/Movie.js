import React from 'react'
import './Movie.css'
import { Link } from 'react-router-dom';

export const Movie = ({
    title,
    backdrop_path,
    overview,
    vote_average,
    poster_path,
}) => {
    return (
        <main
        className="backdrop"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0) 20%, rgb(0,0,0) 100%), url(https://image.tmdb.org/t/p/w1280${backdrop_path})`}}>
        <div className="movie-container-one">
            <Link to="/"> 
                <div className="back-arrow">
                <p classname="text-animation"><i class="arrow left"></i>
                    Movies
                    </p>
                </div>
                
            </Link>
        
        <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        alt={title} 
        />
        </div>
        <div className="movie-container-two">

        <h1>{title}
        <span className="rating">
            {vote_average}/10
        </span>
        </h1>
        <p>{overview}</p>
        </div>
        </main>
    )
}