import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
// import {SINGLE_MOVIES_URL} from "utils/urls"
import styled from "styled-components";


const BackDrop = styled.div`
background-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%), url(${props => props.url});
min-height: 100vh;
background-size: cover;
`;

const GoBackButton = styled.button`
    padding: 10px;
    margin-top: 35px;
    width: 75px;
    color: white;
    background-color: grey;
`;

   // const backgroundImageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    // const background = {
    //     backgroundImageUrl: `url(${backgroundImageUrl})`
    // }


const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const onBackButtonClick = ()=> {
        navigate(-1);
    }

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e99c6c8e9d657c50fc40ffe9db9d16f5&language=en-US`)
            .then((res) => res.json())
            .then(data => {
                setMovie(data);
            })
    }, [id])
 
    return (
        <BackDrop url={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
                <div className="details-container">
                    <GoBackButton onClick={onBackButtonClick}>Go back</GoBackButton>
                    <div className="container">
                        <div className="info-child">
                            <h1 className="movie-title">{movie.title}</h1>
                            <p className="movie-overview">{movie.overview}</p>
                            <p className="movie-rating">Rating: {movie.vote_average}/10</p>
                        </div>
                        <div className="img-child">
                            <img 
                                className="poster-img"
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt={movie.title}
                            /> 
                        </div>
                    </div>
                </div>
        </BackDrop>
    )
}

export default MovieDetails;
