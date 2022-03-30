import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const Movie = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${'2ef0cecd459c1c1851bbe1d699a604a0'}&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovies(data.results)
            })
    }, [])

    return (
        <div className="homePage">

        {movies.map((movie) => (
            <Link
                to={`/movie/${movie.id}`} 
                key={movie.id}>
                
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />

            <div className="details">
                <h1>{movie.title}</h1>
                <p>{movie.release_date}</p>
            </div>
            </Link>
        ))}

        </div>
    )
}

export default Movie