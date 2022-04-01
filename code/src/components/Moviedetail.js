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
    position: absolute;
        background-color: black;
        width: 200px;
        margin: 30px;
        color: white;
        text-decoration: none;
        border-radius: 10px;
        text-align: center;
        padding: 10px;

        &:hover {
            filter: brightness(80%);
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
        width: 100vw;
    `

    const MovieInfo = styled.section`
    position: absolute;
    display: flex;
    flex-direction: row;
    margin-top: 450px;
    margin-left: 100px;
    
    
    `
    const MovieSmallImage = styled.img`
        position: absolute;
        border: 3px solid white;
        border-radius: 10px;
        width: 200px;
    `

    const TextContainer = styled.section`
        display: flex;
        flex-direction: column;
        position: absolute;
        margin-left: 250px;
        margin-top: 80px;
        background-color: rgba(0, 0, 0, 0.637);
        border-radius: 10px;
        
    
    `

    const MovieTitle = styled.p`
       font-size: 40px;
       margin: 15px;
    `

    const MovieOverview = styled.p`
    display: block;
    font-size: 20px;
    width: 700px;
    margin: 15px;
    `
    const MovieRating = styled.p`
    font-size: 20px;
    color: green;
    margin: 15px;
    `

    //Destructuring from useState hook holding API data object
    const { title, poster_path, backdrop_path, overview, vote_average } = movieDetails;

    return (
        <Div>
            <StyledBackLink to="/">Back to movielist page</StyledBackLink>
        
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