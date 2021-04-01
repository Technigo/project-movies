import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Select from '../components/BackButton'



const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [filter, setFilter] = useState("popular")
    // Upcoming movies  => https://api.themoviedb.org/3/movie/upcoming?api_key=2e6a7b75ad4d088fae1f52620044bef7&language=en-US&page=1
    // Latest movies => https://api.themoviedb.org/3/movie/latest?api_key=2e6a7b75ad4d088fae1f52620044bef7&language=en-US
    // Popular movies => https://api.themoviedb.org/3/movie/popular?api_key=2e6a7b75ad4d088fae1f52620044bef7&language=en-US&page=1
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${filter}?api_key=2e6a7b75ad4d088fae1f52620044bef7&language=en-US&page=1`)
        .then((res) => res.json())
        .then((json) => setMovies(json.results))
        .catch((err) => console.error(err))
    }, [])
    
    console.log(movies)
 
    const onFilterChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        <>
            <Select onFilterChange = {onFilterChange} />
            <div className="movies-wrapper">
            
                {movies.map((movie) => (
                    <Link to={`/details/${movie.id}`}>
                        <div 
                        key={movie.id}
                        className="container"
                        >
                            <img className="image" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                                <div className="middle-mobile">
                                    <div className="text-mobile">
                                        <h1>{movie.original_title}</h1>
                                        <h3>{movie.release_date}</h3>
                                    </div>
                                </div>
                                <div className="middle"> 
                                    
                                    <div className="text">
                                        <h1>{movie.original_title}</h1>
                                        <h3>{movie.release_date}</h3>
                                    </div>
                                    
                                </div>
                        </div>       
                                

                    </Link>
                    
                ))}
            </div>
        </>
    )
}

export default MovieList