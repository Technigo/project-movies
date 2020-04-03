import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MovieListStyle } from './MovieListStyle.css'


export const MovieList = () => {
    const [movies, setMovies] = useState ([])
    const apiKey = "9eb10b1ac1ea6b4cccef611cbd68f8fc"

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then((res) => res.json())
        .then((json) => {
        setMovies(json.results)
        })
    }, [])

    return (
        <div >
            <section className="big-container">
            {movies.map((movie) => (
                <div key={movie.id}  className= "movie-card-wrapper">
                    <div clasName="movie-card"> 
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt= {movie.title}/>
                    </div>
                    <div className="text-box">
                    <h2>
                        <Link to={`/details/${movie.id}`}>
                        {movie.title}
                        </Link>
                    </h2>
                        <h3>Relased {movie.release_date}</h3>
                </div>
                </div>

            )
            ) 
            }
            </section> 
        </div>
    )
}