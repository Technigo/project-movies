import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { API_KEY } from 'Apis/Urls';

//filter on object list (convert to entries first), instead of doing multiple fetch on same data
//async await? 
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



    return (
        <div style={{display: 'flex', flexDirection: 'column', color: 'white'}}>
        <Link to="/">Back to movielist page</Link>
        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt="film poster"/>
        <p>{movieDetails.title}</p>
        <p>{movieDetails.overview}</p>
        <p>Ratings {movieDetails.vote_average}</p>
        </div>
    )
}

export default Moviedetail