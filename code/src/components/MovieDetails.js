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
        <div>
            <button onClick={onButtonClick}>Go back</button>
            <img src={details.poster_path ? `${apiImageAddress}w154${details.poster_path}`: ''} alt="Poster"/>
            <img src ={details.backdrop_path ? `${apiImageAddress}w1280${details.backdrop_path}` :''} alt="Background-poster" />
            <h2>{details.title}</h2>
            <h3>{details.vote_average} /10</h3>
            <p>{details.overview}</p>
        </div>
    )
}  

