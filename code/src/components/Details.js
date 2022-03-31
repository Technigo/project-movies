import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useParams, useNavigate } from 'react-router-dom'

const baseURL = "https://image.tmdb.org/t/p/";
const imgSize = "original";

const GoBackButton = styled.button`
    padding: 10px;
    color: white;
    background: rgba(0, 0, 0, 0.4);
    font-style: italic;
    font-size: 1rem;
    font-weight: 500;
    max-width: 7rem;
    max-height: 3rem;
    border: 2px solid white;
    border-radius: 2rem;
    cursor: pointer;
`;

const BackDrop = styled.div`
        background-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url(${(props) => props.url});
        background-size: cover;
        min-height: 100vh;
    `;

export const Details = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})
    const navigate = useNavigate();

    const onBackButtonClick = ()=> {
        navigate(-1);
    }
    
    const API_KEY = '3bf2860c1d44881bc87143482ddf0f94';
    const API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`

    useEffect(() => {
        fetch(API)
        .then((res) => res.json())
        .then((data) => setMovie(data))
    }, [API])
    console.log(movie)
    return (
        <BackDrop
            url={baseURL + imgSize + movie.backdrop_path}>
            
            <div className='movie-info-container'>
                <GoBackButton className='go-back-buttom' onClick={onBackButtonClick}>Go back</GoBackButton>
                <div className='movie-info'>
                    <img className='detail-poster' src={`${baseURL}${imgSize}${movie.poster_path}`} alt={movie.original_title} />
                    <div className='detail-text'>
                        <h2>{movie.original_title} <span className='rating'>{movie.vote_average}/10</span></h2>
                        {/* <p className='rating'>{movie.vote_average}</p> */}
                        <p className='overview'>{movie.overview}</p>
                    </div>
                    {/* <img className='backdrop' src={`${baseURL}${imgSize}${movie.backdrop_path}`} alt="backdrop movie" /> */}
                    
                    {/* {movie && (
                        <div key={movie.idMovie}>
                            <img src={`${movie.strMovieThumb}/preview`} alt={movie.strMovie} />
                            <h1>{movie.strMovie}</h1>
                            <h3>{movie.intYearReleased}</h3>
                            <h3>Genre: {movie.strGenre}</h3>
                        </div>
                    )} */}
                </div>
            </div>
        </BackDrop>
    )
}
