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

        <div>
            <p className="titleInfoPage">{movie.original_title}</p>
            <p className="votesInfoPage">{movie.vote_average}/10</p>

            <p className="movieText">{movie.overview}</p>
            <section className="backDropPoster">
                <img className="backdropMoviePoster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="movie.poster_path" />
            </section>
            <img className="backdrop" src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="movie.backdrop_path" />



        </div >
    )
}


