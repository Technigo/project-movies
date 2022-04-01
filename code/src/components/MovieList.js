import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { MOVIE_LIST_URL } from 'utils/urls'
import { POSTER_URL } from 'utils/urls'


const MovieSection = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap
    
`

const MovieCard = styled.article`
    flex: 25%;
    a img {
        width: 100%;
        height: 100%;
    }
  `

const MovieList = () => {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch(MOVIE_LIST_URL)
            .then((res) => res.json())
            .then((data) => {
                setMovieList(data.results)
            })
    }, [])

    return (
        <MovieSection>
            {movieList.map((movie) => {
                const url = POSTER_URL + movie.poster_path
                return (
                    <MovieCard key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            <img src={url} alt={movie.title} />
                        </Link>
                    </MovieCard>
                )
            })}
        </MovieSection>
    )
}

export default MovieList