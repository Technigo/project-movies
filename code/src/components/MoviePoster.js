import React, {useEffect, useState } from "react"
// import css from 'moviePoster.css'


export const MoviePoster = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e3377c24099e57b80f30c2dff1865fdf&language=en-US&page=1")
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            setMovies(json.results)
        }
        )
    })
    return (
        <div className="movie">
            {movies.map((movie) => (
                <div className="movie">
                    {movie.title}
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie poster"/>

                </div>
            ))}
        </div>
    )
}