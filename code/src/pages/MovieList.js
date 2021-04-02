import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Select from '../components/Select'

const APIkey = "2e6a7b75ad4d088fae1f52620044bef7"

const topRated ="top_rated"  
const upcomingMovies = "upcoming" 
const popularity = "popular"

const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [filter, setFilter] = useState("popular")
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${filter}?api_key=2365aea36d60ef1f206bd1bdf23fd999`)
        .then((res) => res.json())
        .then((json) => setMovies(json.results))
        .catch((err) => console.error(err))
    }, [filter])
    
    const onFilterChange = (e) => {
        console.log(e.target.value)
        setFilter(e.target.value)
    }
    
    return (
        <>
            <div><Select topRated={topRated} upcomingMovies={upcomingMovies} popularity={popularity}  onFilterChange = {onFilterChange} filter={filter} /></div>
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