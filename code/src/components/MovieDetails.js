import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MOVIE_DETAIL_URL } from 'utils/urls'
import { BACKDROP_URL } from 'utils/urls'
import { POSTER_URL } from 'utils/urls'
import styled from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'


const MovieDetails = () => {
    const [movie, setMovie] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    const Background = styled.div`
    background-size: cover; 
    min-height: 100vh;
    position:relative;
    `

    const GoBackButton = styled.button`
        padding: 10px;
        color: white;
        background-color: black;
        font-style: bold;
        font-size: 15px;
        svg {
            position:relative;
            top: 50%;
            padding: 5px;
        }
`
    const onBackButtonClick = () => {
        navigate(-1);
    }

    const DetailContainer = styled.div`
    display:flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction:row; 
    padding: 10px;    
    margin-bottom: 2rem;
    `

    const TitleRatingContainer = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-direction:column; 
    padding: 10px; 
    max-width: 30vw;     
    background-color: rgba(220,220,220, 0.3)
    `


    useEffect(() => {
        fetch(MOVIE_DETAIL_URL(id))
            .then((res) => res.json())
            .then((data) => setMovie(data))
    }, [id])

    console.log(movie)

    const backdrop = `${BACKDROP_URL}${movie.backdrop_path}`
    const poster = POSTER_URL + movie.poster_path


    return (
        <article>
            <Background style={{ backgroundImage: `url(${backdrop})` }}>
                <GoBackButton onClick={onBackButtonClick}><FaArrowLeft />Back to movielist</GoBackButton>
                <DetailContainer>
                    <img src={movie.poster_path ? poster : ''} alt={movie.title} />
                    <TitleRatingContainer>
                    <h2>{movie.title} {movie.vote_average}/10</h2>
                    <h3>{movie.tagline}</h3>
                    <p>{movie.overview}</p>
                    </TitleRatingContainer>
                </DetailContainer>
            </Background>
        </article>
    )
}

export default MovieDetails

