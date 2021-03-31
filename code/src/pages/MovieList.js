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
    )
}

export default MovieList