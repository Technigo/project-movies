import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from "styled-components"

export const StyledMovieDetails = styled.div `
    background-color: red;
`

export const MovieDetails = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=27e8fb9e6ffba8008ad2d8ac7babadb3&language=en-US`)
            .then(res => res.json())
            .then(json => {
                setMovie(json)
            })
    }, [id])

    return (
        <StyledMovieDetails>
            <div key={movie.id} >
                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                <h1>{movie.title}</h1>
                <p>{movie.vote_average}/10</p>
                <p>{movie.overview}</p>
            </div>
        </StyledMovieDetails>
    )
}
