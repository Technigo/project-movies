import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Movies = ({ apiData }) => {
    const MovieContainer = styled.div`
        margin: 10px;
        display: flex;
        flex-direction: column;
        color: white;
        text-align: center;

        &:hover {
            filter: brightness(80%);
        }
    `

    return (
        apiData && apiData.map((movieItem) => {
            const { id, poster_path, title, release_date } = movieItem
            return (
                <Link to={`/movie/${id}`} style={{textDecoration: 'none'}}>                                    
                    <MovieContainer>
                        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="film poster"/>
                        <p>{title}</p>
                        <p>Released {release_date}</p>                               
                    </MovieContainer>
                </Link>
                
        )
        })
    )
}
export default Movies