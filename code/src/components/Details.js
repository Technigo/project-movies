import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { SINGLE_MOVIE_URL } from "utils/urls"
import styled from "styled-components"


const GoBackButton = styled.button`
padding: 10px;
color: green;
background-color: red;
font-style: italic;
` 

const Details = () => {

    const [details, setDetails] = useState({})

    //renamed to movieId for clarity. Also, sent it as an argument to the fetch function.
    const { movieId } = useParams()
    const navigate = useNavigate()


    const onBackButtonClick = () => {
        navigate(-1)
        // navigate('/')
    }


    useEffect(() => {
        fetch(SINGLE_MOVIE_URL(movieId))
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setDetails(data))
            // console.log(data)
    }, [])

    return (
    <div>
         <GoBackButton onClick={onBackButtonClick}>Movies</GoBackButton>
        <div>{details.title}</div>
        <div>{details.vote_average}</div>
        <div>{details.overview}</div>
        <img src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} /> 
        <img src={`https://image.tmdb.org/t/p/w1280/${details.backdrop_path}`} /> 
    </div>
    
    )
}

export default Details