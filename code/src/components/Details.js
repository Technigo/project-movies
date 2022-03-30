import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useParams, useNavigate } from 'react-router-dom'

const baseURL = "https://image.tmdb.org/t/p/";
const imgSize = "original";

const GoBackButton = styled.button`
    padding: 10px;
    color: white;
    background-color: black;
    font-style: italic;
`;


export const Details = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})
    const navigate = useNavigate();

    const onBackButtonClick = ()=> {
        // Use it to go back to previous page
        navigate(-1);

        // navigate('/details/squirtle')
    }

    const API_KEY = '3bf2860c1d44881bc87143482ddf0f94';
    const API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`

    useEffect(() => {
        fetch(API)
        .then((res) => res.json())
        .then((data) => setMovie(data))
    }, [movieId])
    console.log(movie)
    return (
        <div>
            <GoBackButton onClick={onBackButtonClick}>Go back</GoBackButton>
            <h2>{movie.original_title}</h2>
            <p className='rating'>{movie.vote_average}</p>
            <p className='overview'>{movie.overview}</p>
            <img className='backdrop' src={`${baseURL}${imgSize}${movie.backdrop_path}`} alt="backdrop movie image" />
            <img className='poster-img' src={`${baseURL}${imgSize}${movie.poster_path}`} alt={movie.original_title} />
            {/* {movie && (
                <div key={movie.idMovie}>
                    <img src={`${movie.strMovieThumb}/preview`} alt={movie.strMovie} />
                    <h1>{movie.strMovie}</h1>
                    <h3>{movie.intYearReleased}</h3>
                    <h3>Genre: {movie.strGenre}</h3>
                </div>
            )} */}
        </div>
    )
}
