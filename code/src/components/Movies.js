import React, { useEffect, useState } from 'react'
import './movies.css'

export const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() =>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=057cd4e552ae112195cad4ea9c32ccdb&language=en-US&page=1')
        .then((res) => res.json())
        .then((json) =>{
            console.log(json)
            setMovies(json.results)
        })
    }, [])

    return (
        <section className="movie-section">
            {movies.map((movie) => (
                <div key={movie.id}>
                    <div className="movie-info">
                     <h1>{movie.title}</h1>
                     <h2>Released {movie.release_date}</h2>
                     </div>
                     <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />
                    </div>
                </div>
                
            ))}
        </section>
    )
}