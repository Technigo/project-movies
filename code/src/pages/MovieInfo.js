import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./movieInfo.css"


export const MovieInfo = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState([])


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0acc5941943be92854a9966e91961a97&language=en-US`)
            .then((res) => res.json())
            .then((json) => {
                setMovie(json)
                console.log(json)
            })
    }, [movieId])

    return (
        <section className="infoContainer">
            {/* poster, text about the movie, title and ratings */}

            {/* <section className="detailsContainer"> */}
            <img className="backdrop" src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="movie.backdrop_path" />
            {/* background image */}
            <div className="aboutContainer">
                <div className="infoPoster">
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="movie.poster_path" />
                </div>
                <div className="titleInfo">
                    {/* title and ratings */}
                    <h1 className="movieTitle">{movie.original_title}</h1>
                    <p className="movieVotes">{movie.vote_average}/10</p>
                    <p className="movieText">{movie.overview}</p>
                </div>
            </div>
        </section>
    )
}



