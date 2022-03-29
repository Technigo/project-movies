import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import arrow from '../assets/arrow.png'

const Details = ({films}) => {
    const {id} = useParams()

    const movie = films.filter(movie => movie.id === Number(id))[0];

    // NOT FOUND Page
    if (movie === undefined) {
        return (
            <div className="error">
                <p>Movie not found!</p>
            </div>
        )
    }

    console.log(movie)
    // console.log(movie.backdrop_path)

    const backgroundImageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`

    

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImageUrl})`
    }
    
    console.log(backgroundImageUrl)
    return(
    <section style={backgroundStyle}>
    <div className="content-flex-bar">
        <Link to="/"><div role="button" className="back-button"><img className="arrow-icon" src={arrow} alt="back-button" /><p className="button-text">Movies</p></div></Link>
        <div>
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