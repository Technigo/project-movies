import React from 'react'
import { Link } from 'react-router-dom'
import './movieDetails.css'
import { useParams } from 'react-router-dom'

export const MovieDetails = ({ movies, movieDetails }) => {
    const params = useParams();


    console.log("movies", movies)
    const matchMovie = movies.find(movie => movie.id === parseInt(params.id))
    // matchMovie && fetchMovieDetails(matchMovie.id)

    console.log("movieDetails", movieDetails)
    // : movieDetails.genres.map(genre => { return `${genre.name}|` })
    console.log("movieDetails", movieDetails && movieDetails.genres.length)

    return (
        <section className="movieDetails-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${matchMovie.backdrop_path}` }} >
            <Link to="/" className="ancor-back"> <div className="movieDetails-back"><i className="fas fa-chevron-circle-left"></i>Movies</div></Link>
            <div className="movieDetails-sumary">
                <img className="movieDetails-image" src={`https://image.tmdb.org/t/p/w342/${matchMovie.poster_path}`} alt={matchMovie.title} />
                <div className="movieDetails-text">
                    <h1 className="movieDetails-title">{matchMovie.title}
                        <span className="movieDetails-rating">{matchMovie.vote_average}/10</span>
                    </h1>
                    <h2 className="movieDetails-gender">{movieDetails && movieDetails.genres.length > 1 ? `Genders: ` : `Gender: `}
                        <span className="movieDetails-gender-span">{movieDetails && movieDetails.genres.map(genre => `${genre.name} | `)}</span>
                    </h2>
                    {/* <h2 className="movieDetails-gender">{movieDetails && movieDetails.genres.length > 1 ? "Genders:" : "Gender:"}
                        <span className="movieDetails-gender-span">{movieDetails && movieDetails.genres.map(genre => `${genre.name} | `)}</span>
                    </h2> */}
                    <p className="movieDetails-sinopsis">{matchMovie.overview}</p>
                </div>
            </div>
        </section>
    )
}
