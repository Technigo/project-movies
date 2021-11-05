import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BackIcon } from './Icon/Back'

import "../css/Detail.css"

const Detail = () => {
    const [movie, setMovie] = useState ({})
    const { id } = useParams()

    useEffect (() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=%7Bapi_key%7D&language=en-US`)
            .then ((res) => res.json())
            .then ((json) => {
                setMovie(json)
            })
    }, [id])

    return (
        <article className="movieDetails">
            <Link to="/" className="backLink">
                <BackIcon /> Movies
            </Link>
            {movie && (
                <div className="cover"
                    style={{
                        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
                    }}
                >
                    <div className="detailsContainer">
                        <img 
                            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className="movieSummary">
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            )}
        </article>
    )
}


export default Detail 