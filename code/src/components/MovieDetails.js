import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MOVIE_DETAIL_URL } from 'utils/urls'
import { BACKDROP_URL } from 'utils/urls'
import { POSTER_URL } from 'utils/urls'

const MovieDetails = () => {
    const [movie, setMovie] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(MOVIE_DETAIL_URL(id))
            .then((res) => res.json())
            .then((data) => setMovie(data))
    }, [id])

    console.log(movie)

    // const backdrop = BACKDROP_URL + movie.backdrop_path
    // const poster = POSTER_URL + movie.poster_path


    return (
        <article>  
            <h2>{movie.title} {movie.vote_average}/10</h2>
            <h3>{movie.tagline}</h3>
            <p>{movie.overview}</p>
            {/* <img src={BACKDROP_URL + movie.backdrop_path} alt={movie.title} /> */}
            <img src={movie.backdrop_path ? BACKDROP_URL + movie.backdrop_path : ''} alt={movie.title} />
            <img src={movie.poster_path ? POSTER_URL + movie.poster_path : ''} alt={movie.title} />     
        </article>
    )
}

export default MovieDetails

/* <img
  src={movie.poster_path ? `${apiImageAddress}w300${movie.poster_path}` : ''}
  alt="movie_picture"
/> */