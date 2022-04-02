import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { SINGLE_MOVIES_URL } from 'utils/urls';
import styled from 'styled-components';
import '../css/moviedetails.css';


const BackDrop = styled.div`
background-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url(${props => props.url});
min-height: 100vh;
background-size: cover;
`;

const GoBackButton = styled.button`
    padding: 15px;
    margin-top: 35px;
    width: 120px;
    color: white;
    background-color: rgb(0,0,0);
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 10%;
    font-weight: 700;
    
    &:hover {
    background-color: rgb(0,0,0,0.5);
    color: white;
    transition: background-color 0.4s ease;
    transition: font-size 0.4s ease;
    heigth: 30px;
    }
`;

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const onBackButtonClick = ()=> {
        navigate(-1);
    }

    useEffect(()=> {
        fetch(SINGLE_MOVIES_URL(id))
            .then((res) => res.json())
            .then(data => {
                setMovie(data);
            })
    }, [id])
 
    return (
        <BackDrop url={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
                <section className='details-section'>
                    <GoBackButton onClick={onBackButtonClick}>Go back</GoBackButton>
                    <div className='details-container'>
                        <div className='info-child'>
                            <h1 className='movie-title'>{movie.title}</h1>
                            <p className='movie-overview'>{movie.overview}</p>
                            <p className='movie-rating'>Rating: {movie.vote_average}/10</p>
                        </div>
                        <div className='img-child'>
                            <img 
                                className='poster-img'
                                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                                alt={movie.title}
                            /> 
                        </div>
                    </div>
                </section>
        </BackDrop>
    )
}

export default MovieDetails;
