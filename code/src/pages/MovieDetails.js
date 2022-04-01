import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from "styled-components"

const StyledMovieDetails = styled.article `
    .background {
        min-height: 100vh;
        display: flex;
        background-size: cover;
        flex-direction: column;
        justify-content: flex-end;
    }


    .backLink {
        color: white; 
        padding: 10px;
        top: 5%;
        left: 5%;
        position: absolute;
        font-weight: 700;
        text-decoration: none;
    }

    .backArrow {
        background: white;
        color: black; 
        border-radius: 50%;
    }

    .summary {
        display: flex;
        align-items: end;
        padding: 30px; 
    }

    .poster {
        border: solid white 5px;
    }

    h1 {
        color: white;
        font-size: 20px;
    }

    .rating {
        color: red;
        font-size: 17px;
        font-weight: 400;
        margin-left: 10px;
    }

    .details {
        padding: 20px;
    }

    .details p {
        max-width: 400px;
        color: white;
        font-size: 16px;
    }
`
const ButtonText = styled.h3`
    color: white;
    font-size: 20px;
    margin: 0;
`

const GoBackButton = styled.button`
    padding: 10px; 
    width: 150px;
    margin: 30px;
    border-style: none;
    position: absolute;
    display: inline-flex;
    color: #fff;
    align-items: center;
    font-weight: 900;
    text-decoration: none;
    left: 40px;
    top: 20px;
    appearance: none;
    border: none;
    background-color: transparent;
    transition: 0.3s;
    font-size: 20px;
    cursor: pointer;
    &: hover ${ButtonText} {
    transform: translateX(4px);
    transition: all 0.6s ease-in-out;
    display: flex;
    }
`

export const MovieDetails = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const navigate = useNavigate()

    const onBackButtonClick = () => {
        navigate(-1)
      }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=27e8fb9e6ffba8008ad2d8ac7babadb3&language=en-US`)
            .then(res => res.json())
            .then((json) => {
                setMovie(json)
            }, [id])
        })

    return (
        <StyledMovieDetails>
            <article className="movieDetailsPage">
                {movie && (
                <div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}>
                    <GoBackButton onClick={onBackButtonClick}><ButtonText>‹ Movies</ButtonText></GoBackButton>
                    <div key={movie.id} className="summary">
                        <img className="poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}/>
                        <div className="details">
                            <h1>
                                {movie.title}
                                <span className="rating">{movie.vote_average}/10</span>
                            </h1>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
                ) }
            </article>
        </StyledMovieDetails>
    )
    
}
