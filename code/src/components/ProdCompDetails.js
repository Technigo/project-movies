import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './prodCompDetails.css'

export const ProdCompDetails = (props) => {
    const [compMovies, setCompMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = props

    useEffect(() => {
        if (!loading)
            setLoading(true)
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=588b25e1c43b79eebc0f7d2f0c56a882&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_companies=${id}`)
            .then(res => res.json())
            .then(json => {
                setCompMovies(json)
                setLoading(false)
            })


    }, [id])

    if (loading) {
        return <h1>LOADING</h1>
    }

    return (
        <div className="compMovieList">
            {compMovies.results.map(movie => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                    <div className="details">
                        <h1>{movie.title}</h1>
                        <p>Released {movie.release_date}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}



