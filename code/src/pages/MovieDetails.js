import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from "styled-components"


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

    const StyledMovieDetails = styled.article `
    background-image: url("https://image.tmdb.org/t/p/w1280${movie.backdrop_path}");
    min-height: 100vh;
    display: flex;
    background-size: cover;
    flex-direction: column;
    justify-content: flex-end;

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

    return (
        <StyledMovieDetails>
            <article className="movieDetailsPage">
                {/* <img className="backdrop" src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title}/> */}
                <Link to="/" className="backLink">
                    <span className="backArrow">&#60;</span>Movies
                </Link>
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
            </article>
        </StyledMovieDetails>
    )
    
}
