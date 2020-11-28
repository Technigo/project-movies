import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export const Movies = () => {

    const [movies, fetchMovies] = useState([])
    
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=eb281b7f8ece67c3b577de3061fe96e1&language=en-US&page=1')
        .then((response) => {
            return response.json()
        })
        .then((text) => {
            fetchMovies(text.results)
        })
        .catch((error) => {
            console.error('Request failed', error)
        })
    }, [])

    return <div className="movie-container">
            {
                movies.map(movie => (  
                 <div className="movie" key={movie.id}>       
                    <Link to={`${movie.id}`}>
                        <div className="movie-overlay">
                            <img src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}/>
                            <div className="text-overlay">
                                <h1>{movie.original_title}</h1>
                                <p>{movie.release_date}</p>
                            </div>
                        </div>
                    </Link> 
                 </div>   
                ))
            }
        </div>
}