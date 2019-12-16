import React, { useEffect, useState } from 'react'
import "./movieList.css"
import { Link } from 'react-router-dom'


export const MovieList = () => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0acc5941943be92854a9966e91961a97&language=en-US&page=1')
            .then((res) => res.json())
            .then((json) => {
                setMovies(json.results)
            })
    }, [])

    // function goBack() {
    //     window.history.back();
    // }

    return (
        <div className="movieContainer">
            {movies.map((movie) => (
                <div className="moviePoster" key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />
                        <div className="titleRelease">
                            <h1>{movie.original_title}</h1>
                            <p>Released {movie.release_date}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}



