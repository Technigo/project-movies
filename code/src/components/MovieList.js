import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export const MovieList = () => {
    const [movies, setMovies] = useState([]);
    // const movieKey = "868bb0ec2938c0c650aeb654eb40061d";

    useEffect(() => {
        fetch ("https://api.themoviedb.org/3/movie/popular?api_key=868bb0ec2938c0c650aeb654eb40061d&language=en-US&page=1")
        .then((res) => res.json())
        .then((json) => {
            setMovies(json.results)
        })
    }, [])

    return (
        <section className="movie-list">
         {movies.map((movie) => {      
            console.log(movie)
         return ( 
            <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-in-list">
                <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} className="movie-poster"/>
                <div className="list-details">
                  <h2>{movie.title}</h2>
                  <p>Released: {movie.release_date}</p>
                </div>
            </Link>
            )
        })
        } 
        </section>
    )
}