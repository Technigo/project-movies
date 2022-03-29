import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import arrow from '../assets/arrow.png'
import Error from "./Error";

const Details = ({films}) => {
    const {id} = useParams()
    const movie = films.filter(movie => movie.id === Number(id))[0];

    // NOT FOUND Page
    if (movie === undefined) {
        return (
            <Error />
        )
    }

    const backgroundImageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImageUrl})`
    }
    
    return(
    <section style={backgroundStyle}>
    <div className="vertical-flex-bar">
        <Link to="/" style={{width: '110px'}}><button className="back-button"><img className="arrow-icon" src={arrow} alt="back-button" /><span className="button-text">Movies</span></button></Link>
        <div className="horizontal-flex-bar">
            <img className="details-image" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
            <div className="movie-details">
                <h3>{movie.title} <span className="movie-rating">{movie.vote_average}/10</span></h3>
                <p>{movie.overview}</p>
            </div>
        </div>
    </div>
    </section>
    )
}

export default Details