import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export const Movielist = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=9c9b2fee306d943c3bd7e47689474308&language=en-US&page=1')
        .then(res => res.json())
        .then(json =>{
            console.log(json.results)
            setMovies(json.results)

        })

    },[])

    return(
        <div className="movieList">
            {movies.map((movie) =>(
                
                    <Link className="movie" to={`/movies/${movie.id}`} key={movie.id} >
                    <img className="movieListImg" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}/>
                   <h1 classname="title">{movie.title}</h1>
                    </Link>
                    
                    
                
                    
            ))}
        
            
            
        
        </div>
    )
}