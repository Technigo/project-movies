import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { FaAngleLeft } from "@fortawesome/free-solid-svg-icons"

import { MOVIEDETAIL_API } from "./utils/urls"
import Loader from 'Components/Loader'
import Button from "./Button"


// <FontAwesomeIcon icon="fa-solid fa-angle-left" />

const MovieDetails = () => {
    const [moviedetails, setMovieDetails] = useState([])
    const [loading, setLoading] = useState(false)
    const { movieId } = useParams()

    const navigate = useNavigate()

    const onBackButtonClick = () => {
        navigate(-1)
    }
   
    useEffect(() => {
        const fetchMovieDetails = () => {
            setLoading(true)
            fetch(MOVIEDETAIL_API(movieId))
                .then(res => res.json())
                .then(data => setMovieDetails(data))
                .catch(error => console.error(error))
                .finally(() => setLoading(false))
        }

        fetchMovieDetails()
    }, [movieId])    
    

    return (
        <section className="moviedetails-background" style={{backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.4) 60%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${moviedetails.backdrop_path})`}}>
           {loading && <Loader />}
            <Button
            onClick={onBackButtonClick}>
                <span>
                <FontAwesomeIcon icon="fas-solid fa-angle-left" />
                </span>
                Back
            </Button>
            <div className="moviedetails-wrapper"key={moviedetails.id}>
                <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${moviedetails.poster_path}`} alt=""/>
                <div className="moviedetail-text-group">
                    <h1 className="moviedetail-title">{moviedetails.title}<span className="movie-rating">{moviedetails.vote_average} / 10</span></h1>
                    <p className="movie-overview-text">{moviedetails.overview}</p>
                </div>
            </div>
        </section>
    )
}

export default MovieDetails