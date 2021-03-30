import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//title, rating, overview, img, backdrop
import BackButton from '../components/BackButton'

export const MovieDetails = () => {
    const { movieId } = useParams()
    const [movieDetails, setMovieDetails] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=50eb4adf4920d3714372a2ce134f64ac&language=en-US`)
            .then((res) => res.json())
            .then(json => {
                console.log(json)
                setMovieDetails([json])
            })
    }, [movieId])

    return (
        <div>
            <section>
                <BackButton />
            {movieDetails.map((details) => (
                <div key={details.id}>
                <img src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} />
                <h1>{details.original_title}</h1>
                <img src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} />
                <p>{details.overview}</p>
                <p>{details.vote_average}/10</p>
            </div>
            ))}
            </section>
        </div>
    )
}