import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Movies = ({ apiData }) => {
    const MovieContainer = styled.div`
        width: 375px;
        margin: 0;
        display: flex;
        flex-direction: column;
        color: white;
        text-align: center;

        &:hover {
            filter: brightness(20%);
        }
    `

    const MovieText = styled.div`
        
        
        width: 375px;
        margin-top: 100px;
        text-align: center;
        position: absolute;
        color: white;
        padding-top: 350px; 

       
    `

    const Text = styled.p`
       font-size: 20px;
       font-weight: 700;
        margin: 10px;

        &:hover {
            color: white;
        }
    `




    return (
        apiData && apiData.map((movieItem) => {
            const { id, poster_path, title, release_date } = movieItem
            return (
                <Link to={`/movie/${id}`} style={{textDecoration: 'none'}}>                                    
                    <MovieContainer>
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="film poster"/>
                        <MovieText>
                        <Text>{title}</Text>
                        <Text>Released {release_date}</Text>             
                        </MovieText>                  
                    </MovieContainer>
                </Link>
                
        )
        })
    )
}
export default Movies