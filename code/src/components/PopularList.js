import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'


export const PopularList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3c9451d52520351f0a27222d2fb5cbb2&language=en-US&page=1`)
        .then((res) => res.json())
        .then((json) => {
            setMovies(json.results)
        })
    }, [])

    return (
        <div>
            <div className="movies-container">
                
            {movies.map((movie) => (
            <Link className="movies-info" key={movie.id} to={`/movies/${movie.id}`}>
            <div className="movies-text">
             <h2>{movie.title}</h2>
             <h3>Relsease: {movie.release_date}</h3>
             </div>
            <img className="movies-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}/>    
            </Link>
            ))}
        </div>
        </div>
    )
}