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
                <div className="moviePoster" key={movie.id}>
                    <div className="title">
                        <h1 >{movie.title}</h1>
                        <p>Released {movie.release_date}</p>
                    </div>
                    <Link  to={`/movies/${movie.id}`}  >  
                        <img  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}/>
                    </Link>
                </div>
                          
            ))}
        
        </div>
    )
}

