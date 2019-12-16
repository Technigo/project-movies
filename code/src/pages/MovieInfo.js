import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./movieInfo.css"

export const MovieInfo = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0acc5941943be92854a9966e91961a97&language=en-US`)
            .then((res) => res.json())
            .then((json) => {
                setMovie(json)
                // console.log(json)
            })
    }, [movieId])

    if (!movie) {
        return <div>Ups, need a moment...</div>
    }

    return (
        <section className="infoContainer">
            <Link className="backLink" to={'/'}>
                <svg className="backLinkImg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                    <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fillRule="evenodd">
                    </path></svg>
                <p>Movies</p>
            </Link>
            <div className="backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }} alt="movie.original_title" />

            <div className="infoBox">
                <img className="infoPoster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="movie.original_title" />
                <div className="titleInfo">
                    <h1 className="movieTitle">{movie.original_title}</h1>
                    <p className="movieVotes">{movie.vote_average}/10</p>
                    <p className="movie.overview">{movie.overview}</p>
                </div>
            </div>
        </section>
    )
}



