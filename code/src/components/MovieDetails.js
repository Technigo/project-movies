import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


export const MovieDetails = () => {
    const [details, setDetails] = useState({})
    const {id} = useParams()
    const apiImageAddress = "http://image.tmdb.org/t/p/"
    const navigate = useNavigate()
    const onButtonClick = () => {
        navigate (-1)
    }

    useEffect (() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=49589a3567a395f78c10dc80e04eaf2d&language=en-US`)
          .then((res) => res.json())
          .then((json) => {
           setDetails(json)
             
          }) 
    }, [id])

    return (
        <div className="cover">
            <img className="details-background"  src ={details.backdrop_path ? `${apiImageAddress}w1280${details.backdrop_path}` :''} alt="Background-poster" />
            <div className="details-info">
                <img className ="details-img" src={details.poster_path ? `${apiImageAddress}w342${details.poster_path}`: ''} alt="Poster"/>
            <div className="details-text">
            <div className="details-title-rating">
                <h2>{details.title}</h2>
                <h3>{details.vote_average} /10</h3>
            </div>
                <p>{details.overview}</p>
            </div>
                <button onClick={onButtonClick}> ⇦ Movies</button>
            </div>
        </div>
    )
}  

