import React, {useEffect, useState } from "react"
import 'moviePoster.css'
import { Link, useParams } from 'react-router-dom'


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
                    <div className="movie"  key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie poster"/>
                        </Link>
                        <div className="movieinfo">
                            <h1>{movie.title}</h1>
                        </div>
                    </div>      
            ))}
        </div>
    )
}