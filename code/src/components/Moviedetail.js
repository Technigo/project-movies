import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { API_KEY } from 'Apis/Urls';

const Moviedetail = ({ apiData }) => {
    const { movieId } = useParams();
    console.log(movieId)
    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(movieInfo => {
            console.log(movieInfo)
            setMovieDetails(movieInfo)
        })
    }, [movieId])

    const StyledBackLink = styled(Link)`
        background-color: white;
        width: 200px;
        margin: 30px;
        color: black;
        text-decoration: none;
        border-radius: 10px;
        text-align: center;
        padding: 10px;

        &:hover {
            filter: brightness(80%);
        }
    `    

    return (
        <div style={{display: 'flex', flexDirection: 'column', color: 'white', height: '100vh'}}>
            <StyledBackLink to="/">Back to movielist page</StyledBackLink>
        
            <img src={`https://image.tmdb.org/t/p/w400${movieDetails.backdrop_path}`} alt="film poster"/>
            <p>{movieDetails.title}</p>
            <p>{movieDetails.overview}</p>
            <p>Ratings: {movieDetails.vote_average}/10</p>
        </div>
    )
}

export default Moviedetail