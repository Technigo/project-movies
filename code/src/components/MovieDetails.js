import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'

import {BackLink} from 'components/BackLink'


export const MovieDetails = () => {
    const params = useParams()
    const movieID = params.movieID
    const [movie, setMovie] = useState([])
    // const [error, setError] = useState([])
    console.log(movieID)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=868bb0ec2938c0c650aeb654eb40061d&language=en-US`)
        .then((res) => res.json())
        .then((json) => {
            setMovie(json)
        })
        // .catch((err) => setError(err))
    }, [movieID])

    console.log(movie)

    if(movie.success !== false) {

        return(
            <section className="movie" style={{backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.0) 40%), url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`}}>
                <BackLink />
                <div className="movie-details">
                    <img className="movie-details-poster" src= {`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-information">
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            </section>
        )
    } else {
        return(
            <div>
                <p>Sorry we could not find any information about this movie. </p>
                <BackLink />
            </div>
    )
}
    }