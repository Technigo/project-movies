import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const MovieList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=2e6a7b75ad4d088fae1f52620044bef7&language=en-US&page=1")
        .then((res) => res.json())
        .then((json) => setMovies(json.results))
    }, [])

    console.log(movies)

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <img src={movie.poster_path} alt={movie.title} />
                    <h2>
                        <Link to={`/details/${movie.id}`}>
                            {movie.original_title}
                        </Link>
                    </h2>
                    <h3>{movie.release_date}</h3>
                </div>
            ))}
        </div>
    )
}

export default MovieList