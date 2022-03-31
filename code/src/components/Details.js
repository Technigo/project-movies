import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Backdrop = styled.section`
        background-image: url(https://image.tmdb.org/t/p/original${props => props.url});
        background-size: cover;
        min-height: 100vh; 
    `
const Details = ({ movies, StyledButton }) => {
    const { movie_id } = useParams()
    const movie = movies.filter(movie => movie.id === Number(movie_id))[0]

    console.log('single movie details component', movie)

    return (
        <Backdrop url={movie.backdrop_path}>
            <Link to='/'><StyledButton>Back to Movies</StyledButton></Link>
            
            <div>
                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt='poster'/>
            </div>
            <div>
                <h1>{movie.original_title}</h1>
                <p>{movie.overview}</p>
                <p>{movie.vote_average}/10</p>
            </div>
        </Backdrop>
    )
}

export default Details;