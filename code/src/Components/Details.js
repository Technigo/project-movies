/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Details.css'

export const Details = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState();
    // The `useEffect` hook is being passed two arguments: a function and an array of
    // dependencies. The function in this case is responsible for the fetch request and
    // updating the movie state. The array of dependencies contains a single element,
    // `id`, meaning that the function will only be triggered when the `id` value
    // changes. //
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=986aaac98bfe3b83f202c023b975310e&language=en-US`)
            .then((res) => res.json())
            .then((json) => {
                setMovie(json);
            })
    }, [id]);

    return (
        <div className="all-details">
            <Link className="back-btn" to="/">
                <button type="button">Back to Movies</button>
            </Link>
            {movie && (
                <div
                    className="background"
                    // eslint-disable-next-line object-curly-newline
                    style={{
                        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    <div className="details-container">
                        <img className="details-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                        <div className="details-text">
                            <h1 className="movie-title">{movie.title} <span className="rating">⭐{Math.round(movie.vote_average * 10) / 10}</span></h1>
                            <p className="movie-overview">{movie.overview}</p>
                        </div>
                    </div>
                </div>)}
        </div>

    )
}