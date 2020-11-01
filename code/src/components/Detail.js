import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



export const Detail = () => {
    const apiKey = "3c9451d52520351f0a27222d2fb5cbb2"
    const { movieId } = useParams()
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US&page=1`)
            .then((res) => res.json())
            .then((json) => {
                setMovies(json)
            })
    }, [movieId])

    return (
            <section className="movie-backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` }}>
                <div className="movie-content">
                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={movies.title} />
                    <div className="movie-info">
                        <h1>{movies.title} <span className="movie-vote">{movies.vote_average}/10</span></h1>
                        <p>{movies.overview}</p>
                    </div>
                </div> 
            </section>
    )
}

