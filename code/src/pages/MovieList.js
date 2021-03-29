import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const MovieList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=2e6a7b75ad4d088fae1f52620044bef7&language=en-US&page=1")
        .then((res) => res.json())
        .then((json) => setMovies(json.results))
    }, [])
    

    const Pic = `https://image.tmdb.org/t/p/w1200${movies.backdrop_path}`
    //console.log(movies)
//url=(`https://image.tmdb.org/t/p/w1200${movie.backdrop_path}`

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                
                        <Link to={`/details/${movie.id}`}>
                            
                            <h2>{movie.original_title}</h2>
                            <h3>{movie.release_date}</h3>

                        </Link>
                    
                    

                  
            
                </div>
            ))}
        </div>
    )
}

export default MovieList