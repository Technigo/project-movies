import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useParams, useNavigate } from 'react-router-dom'
import LoadingPage from './LoadingPage';

const baseURL = "https://image.tmdb.org/t/p/";
const imgSize = "original";

const BackDrop = styled.div`
        background-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url(${(props) => props.url});
        background-size: cover;
        min-height: 100vh;
`;

export const Details = ({API_KEY, StyledButton, loading, setLoading}) => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})
    const navigate = useNavigate();

    const onBackButtonClick = ()=> {
        navigate(-1);
    }

    const API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setMovie(data)
                setLoading(false)
            });
    }, [API, setLoading])
    
    return (
        (loading 
            ? <LoadingPage />
            : <BackDrop url={baseURL + imgSize + movie.backdrop_path}>
                <div className='movie-info-container'>
                    <StyledButton className='styled-button' onClick={onBackButtonClick}>Go back</StyledButton>
                    <div className='movie-info'>
                        <img className='detail-poster' src={`${baseURL}${imgSize}${movie.poster_path}`} alt={movie.original_title} />
                        <div className='detail-text'>
                            <h2>{movie.original_title} <span className='rating'>{movie.vote_average}/10</span></h2>
                            <p className='overview'>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </BackDrop>
        )
    )
}
