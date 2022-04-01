import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Movies = ({ apiData }) => {
    const MovieContainer = styled.div`
    position: relative;
        width: 375px;
        margin: 0;
        display: flex;
        flex-direction: column;
        color: white;
        

        `
        
    const PosterImage = styled.img`
        
        &:hover {
            opacity: 0.2;
        }
    `

    const MovieText = styled.div`
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        padding-top: 400px;
        color: white;

        &:hover {
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
                        <PosterImage src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="film poster"/>
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