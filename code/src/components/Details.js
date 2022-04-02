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
    }


    useEffect(() => {
        fetch(SINGLE_MOVIE_URL(movieId))
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [movieId])

    return (
        <MovieDetailsPage style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${details.backdrop_path})`
        }}>
            <Container>
                <GoBackButton onClick={onBackButtonClick}>Movies</GoBackButton>
                <MovieDetails>
                    <MovieImage src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt="poster-img" />
                    <MovieDescription>
                        <div>{details.title}</div>
                        <div>{details.vote_average}</div>
                        <div>{details.overview}</div>
                    </MovieDescription>
                </MovieDetails>
            </Container>
        </MovieDetailsPage>

    )
}

export default Details



const MovieDetailsPage = styled.div`
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const MovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (min-width: 768px) {
        align-items: flex-end;
        flex-direction: row;
    }
`

const MovieDescription = styled.div`
    color:white;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 12px;
    border-radius: 12px;
    max-width: 650px;
`

const MovieImage = styled.img`
    border: 10px solid white;
`
const Container = styled.div`
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:90%;
`