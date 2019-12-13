import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './movieDetails.css' 

export const MovieDetails = () => {
    const { movieId } = useParams()
    const [movies, setMovies] = useState([])

    useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=057cd4e552ae112195cad4ea9c32ccdb&language=en-US`)
    .then((res) => res.json())
    .then((json) => {
        setMovies(json)
        // console.log(json) want to keep this for the future
    })
}, [movieId])

return (
    <section className="detail-section">        
       
       <div className="go-back">
        <Link to={`/`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fillRule="evenodd"></path></svg>
            <p>Movies</p>
        </Link>
       </div>

        <img className="background" src={`https://image.tmdb.org/t/p/w1280${movies.backdrop_path}`} alt={movies.backdrop_path} />

        <div className="details-info">
            <img src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={movies.original_title} />
            <div className="titel-rating-text">
            <h1>{movies.original_title}</h1>
            <span className="rating">
                Rating {movies.vote_average}/10
            </span>
            <p>
            {movies.overview}
            </p>
            </div>
        </div>
    </section>
)
}