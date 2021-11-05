import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import { BackIcon } from './Icon/Back'

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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fill-rule="evenodd"></path></svg>
                Movies
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