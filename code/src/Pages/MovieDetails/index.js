import React from 'react'
import { Link } from 'react-router-dom'
import './movieDetails.css'
import { useParams } from 'react-router-dom'

export const MovieDetails = ({ movies, fetchMovieDetails, movieDetails }) => {
    const params = useParams();


    console.log("movies", movies)
    const matchMovie = movies.find(movie => movie.id === parseInt(params.id))
    // matchMovie && fetchMovieDetails(matchMovie.id)

    console.log("movieDetails", movieDetails)

    return (
        <section className="movieDetails-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${matchMovie.backdrop_path}` }} >
            <Link to="/"> <div className="movieDetails-back"><i className="fas fa-chevron-circle-left"></i>Movies</div></Link>
            <div className="movieDetails-sumary">
                <img className="movieDetails-image" src={`https://image.tmdb.org/t/p/w342/${matchMovie.poster_path}`} alt={matchMovie.title} />
                <div className="movieDetails-text">
                    <h1 className="movieDetails-title">{matchMovie.title}<span className="movieDetails-rating">{matchMovie.vote_average}/10</span></h1>
                    <p className="movieDetails-sinopsis">{matchMovie.overview}</p>
                </div>
            </div>
        </section>
    )
}
