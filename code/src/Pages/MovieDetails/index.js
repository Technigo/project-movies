import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MOVIE_DETAILS_URL } from '../../utils/url'
import { API_KEY } from '../../utils/api'
import { Loader } from '../../Components/Loader'
import { NotFound } from '../NotFound'
import './movieDetails.css'

export const MovieDetails = ({ movieDetails, setMovieDetails, setHasError, hasError }) => {
    const { id } = useParams()

    useEffect(() => {
        fetch(MOVIE_DETAILS_URL(API_KEY, id))
            .then(response => response.json())
            .then(movieDetails => {
                console.log("movieDetails", movieDetails)
                if (movieDetails.id) {
                    setMovieDetails(movieDetails);
                } else {
                    setHasError(true);
                    setMovieDetails(movieDetails);
                }
            })
            .catch((error) => {
                setHasError(true)
                console.log('Error in Fetch:' + error.message);
            });
    }, [id, setMovieDetails, setHasError])


    if (!movieDetails) {
        return (< Loader />)
    }

    if (hasError && movieDetails.status_message) {
        return <NotFound />
    }

    return (
        <section className="movieDetails-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path}` }} >
            <Link to="/" className="ancor-back"> <div className="movieDetails-back"><i className="fas fa-chevron-circle-left"></i>Movies</div></Link>
            <div className="movieDetails-sumary">
                <img className="movieDetails-image" src={`https://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`} alt={movieDetails.title} />
                <div className="movieDetails-text">
                    <h1 className="movieDetails-title">{movieDetails.title}
                        <span className="movieDetails-rating">{movieDetails.vote_average}/10</span>
                    </h1>
                    <h2 className="movieDetails-gender">{movieDetails.genres?.length > 1 ? `Genders: ` : `Gender: `}
                        <span className="movieDetails-gender-span">{movieDetails.genres?.map(gender => `${gender.name} | `)}</span>
                    </h2>
                    <p className="movieDetails-sinopsis">{movieDetails.overview}</p>
                </div>
            </div>
        </section>
    )

}
