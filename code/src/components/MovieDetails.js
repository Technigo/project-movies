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
    width: 100vw;
    border: 1px solid green;
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
    const onBackButtonClick = ()=> {
    navigate(-1);
}

    useEffect(() => {
        fetch(MOVIE_DETAIL_URL(id))
            .then((res) => res.json())
            .then((data) => setMovie(data))
    }, [id])

    console.log(movie)

    // const backdrop = BACKDROP_URL + movie.backdrop_path
    // const poster = POSTER_URL + movie.poster_path


    return (
        <article>  
            
            
        
            {/* <img src={BACKDROP_URL + movie.backdrop_path} alt={movie.title} /> */}
            {/* <Background style={{backgroundImage: `(url(${movie.backdrop_path ? BACKDROP_URL + movie.backdrop_path : ''}))`}}> */}
            <Background style={{backgroundImage: `(url(${BACKDROP_URL + movie.backdrop_path}))`}}>
            <h2>{movie.title} {movie.vote_average}/10</h2>
           
            <img src={movie.backdrop_path ? BACKDROP_URL + movie.backdrop_path : ''} alt={movie.title} />
            <img src={movie.poster_path ? POSTER_URL + movie.poster_path : ''} alt={movie.title} />     

            <h3>{movie.tagline}</h3>
            <p>{movie.overview}</p>
            <GoBackButton onClick={onBackButtonClick}><FaArrowLeft />Back to movielist</GoBackButton>
            </Background>
        </article>
    )
}

export default MovieDetails

/* <img
  src={movie.poster_path ? `${apiImageAddress}w300${movie.poster_path}` : ''}
  alt="movie_picture"
/> */