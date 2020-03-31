import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { BackIcon } from 'Icons/BackIcon'
import 'Style/moviepages.css'


export const DetailsMovies = () => {
    const apiKey = "ab2733ae6909a12384fc457b822942ca"
    const [ movie, setMovie ] = useState()
    const { id } = useParams()

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US/`)
        .then((res) => res.json())
        .then((json) => setMovie(json))
    
    }, [id])

    if (!movie) {
        return <></>;
    }
    
    return (

        <article className="MoviePage">
        <Link to="/" className="backLink">
        <BackIcon /> Movies
        </Link>
        {movie && (
            <div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}>
            <div className="summary">
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />
            <div className="details">
            <h1>{movie.title}<span className="raiting">{movie.vote_average}/10</span></h1>
            <p>{movie.overview}</p>

            </div>
            </div>
            </div>
        )}

        </article>

    

    )


 }