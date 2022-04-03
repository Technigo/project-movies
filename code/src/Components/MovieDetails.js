import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa"

import { MOVIEDETAIL_API } from "./utils/urls"
import Loader from 'Components/Loader'
import Button from "./Button"



const MovieDetails = () => {
    const [moviedetails, setMovieDetails] = useState(null)
    const [loading, setLoading] = useState(false)
    const { movieId } = useParams()

    const navigate = useNavigate()

    const onBackButtonClick = () => {
        navigate("/")
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
    

    if (moviedetails === null) {
        return <><Loader /></>
    }

        return (
            <section className="moviedetails-background" style={{backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.4) 60%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${moviedetails?.backdrop_path})`}}>
               {loading && <Loader />}
                <Button
                onClick={onBackButtonClick}
                top="1.2rem"
                left="1rem"
                fontSize="1.5rem"
                topDesktop="2.2rem"
                leftDesktop="3.8rem"
                leftHover="1.5rem"
                background="transparent"
                width="100px"
                height="40px"
                color="white"
                fontSizeDesktop="2rem"
                letterSpacing="5px"
                >
                    <span className="button-arrow">
                    <FaChevronLeft />
                    </span>
                    Back
                </Button>
                <div className="moviedetails-wrapper"key={moviedetails.id}>
                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${moviedetails?.poster_path}`} alt=""/>
                    <div className="moviedetail-text-group">
                        <h1 className="moviedetail-title">{moviedetails.title}<span className="movie-rating">{moviedetails.vote_average} / 10</span></h1>
                        <p className="movie-overview-text">{moviedetails.overview}</p>
                    </div>
                </div>
            </section>
        )
    
    
}

export default MovieDetails