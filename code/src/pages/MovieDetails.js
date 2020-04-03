import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { MovieDetailStyle } from './MovieDetailStyle.css'

export const MovieDetails = () => {
    const { id } = useParams()
    const apiKey = "9eb10b1ac1ea6b4cccef611cbd68f8fc"
    const [movieDetails, setMovieDetails] = useState([])

    
useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        .then((res) => res.json())
        .then((json) => {
        console.log(json)
        setMovieDetails(json)
        })
    }, [id])

    return (
        <section className="movie-details">
            <div className="backdrop" style={{ backgroundImage:`url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})` }}>
                <div className="movie-information-wrapper">
                    <div className="poster">
                        <img src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt= {movieDetails.title}></img>
                    </div>                       
                    <div className="movie-information">
                        <h1>{movieDetails.title}</h1>
                        <h3>Rating {movieDetails.vote_average} / 10</h3>
                        <p>{movieDetails.overview}</p>
                    </div>
                </div>     
            </div>
        </section>
    )
}