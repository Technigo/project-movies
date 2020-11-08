import React, { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

import BackArrow from '../components/icons8-back-arrow-64.png';

export const MovieDetails = () =>{
     const { slug }=useParams()

     const API_KEY= '43463ccceed97e5556886a2d1c302174'
     const DETAILS_URL= `https://api.themoviedb.org/3/movie/${slug}?api_key=${API_KEY}&language=en-US`
     
     const [movieDetails, setMovieDetails]= useState([]);
 
     useEffect(() =>{
         fetch(DETAILS_URL)
             .then(resp => resp.json())
             .then((json) =>  setMovieDetails(json));
             
    }, []);
    
    return (
        /* Display background image for details page */
    <article className="movie-details-page" style={{backgroundImage:`url('https://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path}')`}}>
            {/* Arrow icon that links back to first page */}
            <Link to="/" exact="true">
                <div className="back-arrow-text">
                    <img className="arrow" src={BackArrow} alt="back-arrow"/>
                    <p className="back-movies-text">Movies</p>
                </div>
            </Link>
             {/* Display poster imagage, title, rating and text for details page */}
            <div className="movie-details-container">
                <img src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`} alt={movieDetails.original_title}></img>
                <div className="movie-details-text">
                    <h1>{movieDetails.original_title}</h1>
                    <p className="movie-rating-text">{`${movieDetails.vote_average}/10`}</p>
                    <p className="movie-overview-text">{movieDetails.overview}</p>
                </div>
            </div> 
    </article>
)}