import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'components/MovieList.css'



export const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d6f26682ba4bf575c167473c911bdd4c&language=en-US&page=1`)
            .then((res) => res.json())
            .then((json) => {
                setMovies(json.results)
                console.log(json)
            })
    }, [])

    return (
        <div className="movie-list">
            {movies.map((movie) => (

                <Link className="movie-list-info" key={movie.id} to={`/movies/${movie.id}`}>
                    <div className="list-text">
                        <h2>{movie.title}</h2>
                        <h3>Release date: {movie.release_date}</h3>
                    </div>
                    <img className="list-img" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="Movie poster" />
                </Link>
            ))}

        </div>
    )
}