import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DETAILS_URL } from "utils/urls";
import './moviedetails.css'
import { useHistory } from "react-router-dom";
// import { FaChevronCircleLeft } from 'react-icons/fa' <FaChevronCircleLeft />
import { AiOutlineArrowLeft } from "react-icons/ai";

const MovieDetails = () => {
const [movieDetails, setMovieDetails] = useState({});
const { movieId } = useParams();
const history = useHistory();

useEffect(() => {
    fetch(DETAILS_URL(movieId))
    .then((res) => res.json())
    .then((json) => {
        setMovieDetails(json);
        console.log("DETAILS", json);
    });
}, [movieId]);

 
return (
    <section className="wrapper-details">
        <button className="backbutton" onClick={() => history.goBack()}> <AiOutlineArrowLeft /> <h3 className="button-text">Movies</h3></button>
        <div className="background-image" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`,}}>
            <div className="movie-poster">
                <img className="poster-image" src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
                alt="{movieDetails.title} poster"></img>
                <div className="summary">
                    <h1 className="movie-name">{movieDetails.title}
                    <span className="votes">{movieDetails.vote_average}/10</span></h1>
                    <p className="info-details">{movieDetails.overview}</p>
                </div>
            </div>
            
        </div>
        
    </section>
);
};



export default MovieDetails;
