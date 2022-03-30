import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { API_KEY } from 'Apis/Urls';

const Moviedetail = () => {
    const { movieId } = useParams();
    console.log(movieId)
    const [movieDetails, setMovieDetails] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(movieInfo => {
            console.log(movieInfo)
            setMovieDetails(movieInfo)
        })
    }, [movieId])

    return (
        <>
        <Link to="/">Back to movielist page</Link>
        <p>{movieDetails.title}</p>
        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt="film poster"/>
        <p>{movieDetails.overview}</p>
        <p>{movieDetails.vote_average}</p>
        </>
    )
}

export default Moviedetail