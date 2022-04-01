import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Backdrop = styled.section`
        background-image: linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/original${props => props.url});
        background-size: cover;
        min-height: 100vh; 
    `

const Details = ({ movies, StyledButton }) => {
    const { movie_id } = useParams()
    const movie = movies.filter(movie => movie.id === Number(movie_id))[0]

    return (
        <Backdrop url={movie.backdrop_path}>
            <Link to='/'><StyledButton>Back to Movies</StyledButton></Link>
            <div className='detail-group-container'>
                <img className='poster-border' src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt='poster' />
                <div className='detail-group'>
                    <div className='title-rate' >
                        <h1>{movie.original_title}</h1>
                        <span className='voting'>{movie.vote_average}/10</span>
                    </div>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </Backdrop>
    )
}

export default Details;
