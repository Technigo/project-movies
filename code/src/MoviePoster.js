import React, {useEffect, useState } from "react"
import 'moviePoster.css'
import { Link } from 'react-router-dom'


export const MoviePoster = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e3377c24099e57b80f30c2dff1865fdf&language=en-US&page=1")
        .then((res) => res.json())
        .then((json) => {
            setMovies(json.results)
        }
        )
    })
    return (
    <div className="movies">
            {movies.map((movie) => (
            <Link to={`/movie/ ${movie.id}`}>
                    <div className="movie"  key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie poster"/>
                        <div className="movieinfo">
                            <h2>{movie.title}</h2>
                        </div>
                    </div>
                </Link>
                    
            ))}
        </div>
    )
}