import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { MOVIEDETAIL_API } from "./utils/urls"

const MovieDetails = () => {
    const [moviedetails, setMovieDetails] = useState([])
    const { movieId } = useParams()

    const navigate = useNavigate()

    const onBackButtonClick = () => {
        navigate(-1)
    }
   
    useEffect(() => {
        const fetchMovieDetails = () => {
            fetch(MOVIEDETAIL_API(movieId))
                .then(res => res.json())
                .then(data => 
                    setMovieDetails(data))
        }

        fetchMovieDetails()
    }, [movieId])    
    
    console.log(moviedetails)

    return (
        <section className="moviedetails-background" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${moviedetails.backdrop_path})`}}>
            <button onClick={onBackButtonClick}>Back</button>
            <div className="moviedetails-wrapper"key={moviedetails.id}>
                <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${moviedetails.poster_path}`} alt=""/>
                <div className="moviedetail-text">
                    <h1 className="moviedetail-title">{moviedetails.title}<span className="movie-rating">{moviedetails.vote_average}/ 10</span></h1>
                    <p className="movie-overview-text">{moviedetails.overview}</p>
                </div>
            </div>
        </section>
    )
}

export default MovieDetails