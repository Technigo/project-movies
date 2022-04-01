import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { API_KEY } from 'Apis/Urls';

const Moviedetail = () => {
    const { movieId } = useParams();
    
    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(movieInfo => {
            setMovieDetails(movieInfo)
        })
    }, [movieId])

    const StyledBackLink = styled(Link)`
        position: absolute;        
        width: 200px;
        margin: 30px;      
        color: white;
        font-weight: 700;  
        text-decoration: none;
        border-radius: 10px;
        text-align: center;
        padding: 10px;
        display: flex;        

        &:hover {      
            transition: 0.5s ease;      
            filter: invert(70%);
        }

        @media (min-width: 768px) {
            font-size: 30px;
        }
    ` 
    
    const Div = styled.div`
        margin: 0;
        display: flex;
        flex-direction: column;
        color: white;
        height: 100vh;
        width: 100vw;
        
    `

    const BackdropImage = styled.img`               
        height: 100%;        
        object-fit: cover;
    `

    const MovieInfo = styled.section`
        position: absolute;
        margin-left: 30px;

        @media (min-width: 550px) {
            margin-left: 30px;               
        }

        @media (min-width: 768px) {
            margin-top: 90vh;
            margin-left: 30px; 
            display: flex;
            flex-direction: column;
            justify-content: flex-end;     
        }
    `
    
    const MovieSmallImage = styled.img`
        position: absolute;
        border: 3px solid white;
        border-radius: 10px;
        width: 200px;

        @media (max-width: 768px) {
            width: 150px;
        }

        @media (min-width: 375px) and (max-width: 767px) {
            display: none;
        }
    `

    const TextContainer = styled.section`
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 80vw;
        margin-top: 40vh;
        background-color: rgba(0, 0, 0, 0.637);
        border-radius: 10px;          

        @media (min-width: 768px) {
            margin-top: 95vh;
            margin-left: 30vw;
            width: 55vw;
        }

        @media (min-width: 992px) {
            margin-top: 55vh;
            width: 60vw;
        }

        @media (min-width: 1200px) {
            margin-top: 55vh;
            width: 50vw;
        }
        
    `
    const MovieTitle = styled.p`
        font-size: 30px;
        margin: 15px;

        @media (min-width: 768px) {
        font-size: 45px;
        }

        @media (min-width: 992px) {
        font-size: 50px;
        }

        @media (min-width: 1200px) {
        font-size: 55px;

        }
    `

    const MovieOverview = styled.p`
        display: block;
        font-size: 15px;
        margin: 15px;

        @media (min-width: 768px) {
            font-size: 20px;
        }

        @media (min-width: 992px) {
            font-size: 28px;
        }

        @media (min-width: 1200px) {
            font-size: 20px;
        }
    `
    const MovieRating = styled.p`
        font-size: 20px;
        color: green;
        margin: 15px;

        @media (min-width: 768px) {
            font-size: 20px;
        }

        @media (min-width: 992px) {
            font-size: 28px;
        }

        @media (min-width: 1200px) {
            font-size: 30px;
        }
    `

    //Destructuring from useState hook holding API data object
    const { title, poster_path, backdrop_path, overview, vote_average } = movieDetails;

    return (
        <Div>
            <StyledBackLink to="/"><img width={20} style={{filter: 'invert(100%)' }} src="../icons/left-arrow.png" alt="arrow"/>Movies</StyledBackLink>
        
            <BackdropImage src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt="film poster"/>
            <MovieInfo>
                <MovieSmallImage src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="film poster"/>
                <TextContainer>
                    <MovieTitle>{title}</MovieTitle>
                    <MovieOverview>{overview}</MovieOverview>
                    <MovieRating>Ratings: {vote_average}/10</MovieRating>
                </TextContainer>
            </MovieInfo>
        </Div>
    )
}

export default Moviedetail