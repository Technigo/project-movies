import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MOVIE_DETAIL_URL } from 'utils/urls'
import { BACKDROP_URL } from 'utils/urls'
import { POSTER_URL } from 'utils/urls'
import styled from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'


const Background = styled.div`
    background-size: cover; 
    min-height: 100vh;
    position:relative;
    `

const GoBackButton = styled.button`
    position: absolute;
    top: 20px;
    left: 10px;
    padding: 17px;
    color: white;
    background-color:black;
    border: none;
    font-style:bold;
    font-size:15px;
    display: flex;
    svg {
        margin-right: 10px;
    }
`

const DetailContainer = styled.div`
    display:flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction:row; 
    padding: 10px;    
    margin-bottom: 0,5rem;
    position:absolute;
    bottom: 7px;
    left: 5px;
    background-color: rgba(220,220,220, 0.6);
    img {
        border: 5px solid #fff;
    }
    @media (max-width:667px){
        flex-direction: column;
        align-self: center;
        img{
          height: auto;
          width:250px;
           }
    }
    `

const TitleRatingContainer = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-direction:column; 
    padding: 10px; 
    max-width: 30vw; 
    overflow:scroll;
     @media (min-width: 200px) and (max-width:667px){
        flex-direction: column;
        align-self: center;
      
        
          }
        @media (min-width: 668px) and (max-width:1024){
        flex-direction: column;
        align-self: center;
        
       }
             
    `

const MovieDetails = () => {
    const [movie, setMovie] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    const onBackButtonClick = () => {
        navigate(-1);
    }

    useEffect(() => {
        fetch(MOVIE_DETAIL_URL(id))
            .then((res) => res.json())
            .then((data) => setMovie(data))
    }, [id])

    console.log(movie)

    const backdrop = `${BACKDROP_URL}${movie.backdrop_path}`
    const poster = `${POSTER_URL}${movie.poster_path}`


    return (
        <article>
            <Background style={{ backgroundImage: `url(${backdrop})` }}>
                <GoBackButton onClick={onBackButtonClick}><FaArrowLeft />Back to movielist</GoBackButton>
                <DetailContainer className='detail-container'>
                    <img src={movie.poster_path ? poster : ''} alt={movie.title} />
                    <TitleRatingContainer className='title-rating-container'>
                        <h1>{movie.title}</h1>
                        <h2>Ratings: {movie.vote_average}/10</h2>
                        <h3>{movie.tagline}</h3>
                        <p>{movie.overview}</p>
                    </TitleRatingContainer>
                </DetailContainer>
            </Background>
        </article>
    )
}

export default MovieDetails

