import React from 'react'
import { Link } from 'react-router-dom'
import './movieDetails.css'
import { useParams, useHistory } from 'react-router-dom'

export const MovieDetails = ({ movies, movieDetails }) => {
    const { id } = useParams()
    const history = useHistory();

    let matchMovie = movies && movies.find(movie => movie.id === parseInt(id))

    if (!matchMovie) {
        history.push('/')
        return (<></>)
    } else {
        return (
            matchMovie && <section className="movieDetails-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${matchMovie.backdrop_path}` }} >
                <Link to="/" className="ancor-back"> <div className="movieDetails-back"><i className="fas fa-chevron-circle-left"></i>Movies</div></Link>
                <div className="movieDetails-sumary">
                    <img className="movieDetails-image" src={`https://image.tmdb.org/t/p/w342/${matchMovie.poster_path}`} alt={matchMovie.title} />
                    <div className="movieDetails-text">
                        <h1 className="movieDetails-title">{matchMovie.title}
                            <span className="movieDetails-rating">{matchMovie.vote_average}/10</span>
                        </h1>
                        {movieDetails && <h2 className="movieDetails-gender">{movieDetails.genres.length > 1 ? `Genders: ` : `Gender: `}
                            <span className="movieDetails-gender-span">{movieDetails.genres.map(genre => `${genre.name} | `)}</span>
                        </h2>}
                        <p className="movieDetails-sinopsis">{matchMovie.overview}</p>
                    </div>
                </div>
            </section>
        )
    }
}
