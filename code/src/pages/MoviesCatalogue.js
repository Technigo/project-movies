import React, { useEffect, useState } from 'react'

export const MoviesCatalogue = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=db6f51c353540b320755afe867179708&language=en-US&page=1')
            .then(res => res.json())
            .then(json => {
                setMovies(json.results)
            })
    }, [])
    return (
        <div>
            {movies.map((movie) => (
                <a>
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                    <div>
                        <h2>{movie.title}</h2>
                        <p>{movie.release_date}</p>
                    </div>
                </a>
            ))}
            Movies Catalogue
        </div>
    )
}