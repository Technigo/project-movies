import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledMovieList = styled.div`
    background: #000; 

    .movieListPage {
        display: flex;
        flex-wrap: wrap;
    }

    .movieListPage a {
        width: 25%;
        position: relative;
        color: #fff;
        text-decoration: none;
    }

    .movieListPage a img {
        width: 100%;
    }

    .listDetails {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,.75);
        display: none;
        padding: 20px;
    }

    & a:hover .listDetails {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    
`

export const MovieList = () => {
    const [movies, setMovies] = useState ([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=27e8fb9e6ffba8008ad2d8ac7babadb3&language=en-US&page=1')
            .then(res => res.json())
            .then(json => {
                setMovies(json.results)
            })
    }, [])



    return (
        <StyledMovieList>
            <div className="movieListPage">
                {movies.map(movie => (
                    <Link key={movie.id} to={`/movie/${movie.id}`} >
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                        <div className="listDetails">
                            <h1>{movie.title}</h1>
                            <p>Released {movie.release_date}</p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </StyledMovieList>
    )
}