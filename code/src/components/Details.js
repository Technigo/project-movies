import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { SINGLE_MOVIE_URL } from "utils/urls"
import styled from "styled-components"

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
        <MovieDetailsPage bgImage={`https://image.tmdb.org/t/p/w1280/${details.backdrop_path}`}>
            <Container>
                <div><GoBackButton onClick={onBackButtonClick}>← Go back to movies</GoBackButton></div>
                <MovieDetails>
                    <MovieImage src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt="poster-img" />
                    <MovieDescription>
                        <h1>{details.title}</h1>
                        <div>{details.vote_average}/10</div>
                        <p>{details.overview}</p>
                    </MovieDescription>
                </MovieDetails>
            </Container>
        </MovieDetailsPage>

    )
}

export default Details

const MovieDetailsPage = styled.div`
    background-image: url(${props => props.bgImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 768px) {
        height: 100vh;
    }
`

const Container = styled.div`
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:90%;
`

const GoBackButton = styled.button`
    margin-top: 20px;
    color: white;
    font-size: inherit;
    font-family: inherit;
    background: none;
    border: 0px;
    cursor: pointer;
    transition: word-spacing 0.5s ease-out 0s, font-size 0.5s ease-out 0s;
}

&:hover {
    word-spacing: 2px;
    font-size: 1.1rem;
}
`

const MovieDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    margin-top: 20px;

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