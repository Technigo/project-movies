import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useParams } from 'react-router-dom'

const baseURL = "https://image.tmdb.org/t/p/";
const imgSize = "original";

export const Details = () => {
    const {movieId} = useParams()
    const [movie, setMovie] = useState({})

    const API_KEY = '3bf2860c1d44881bc87143482ddf0f94';
    const API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`

    useEffect(() => {
        fetch(API)
        .then((res) => res.json())
        .then((data) => setMovie(data))
    }, [movieId])
    console.log(movie)
    return (
        <div>
            hello
            <img src={`${baseURL}${imgSize}${movie.backdrop_path}`} alt="movie" />
            {/* {movie && (
                <div key={movie.idMovie}>
                    <img src={`${movie.strMovieThumb}/preview`} alt={movie.strMovie} />
                    <h1>{movie.strMovie}</h1>
                    <h3>{movie.intYearReleased}</h3>
                    <h3>Genre: {movie.strGenre}</h3>
                </div>
            )} */}
        </div>
    )
}
