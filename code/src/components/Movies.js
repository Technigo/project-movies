import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Movies = ({ apiData }) => {
    const MovieContainer = styled.div`
        position: relative;
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        color: white;
        `

    const MovieText = styled.div`
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 140px;
        padding-top: 400px;
        color: white;
        overflow: hidden;

        &:hover {
            transition: 0.6s ease; 
            background-color: rgba(0, 0, 0, 0.8);
            opacity: 1;
        }       
    `

    const TitleText = styled.p`
       font-size: 28px;
       font-weight: 700;
       margin: 0 0 10px 25px;    
    `

    const ReleasedText = styled.p`
        margin: 0 0 0 25px;
        font-size: 18px;
    `

    return (
        apiData && apiData.map((movieItem) => {
            const { id, poster_path, title, release_date } = movieItem
            return (
                <Link to={`/movie/${id}`} style={{textDecoration: 'none'}}>                                    
                    <MovieContainer>
                        <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="film poster"/>
                        <MovieText>
                        <TitleText>{title}</TitleText>
                        <ReleasedText>Released {release_date}</ReleasedText>             
                        </MovieText>                  
                    </MovieContainer>
                </Link>                
            )
        })
    )
}
export default Movies