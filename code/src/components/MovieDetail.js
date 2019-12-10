import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// const api_key = 'd6f26682ba4bf575c167473c911bdd4c';

export const MovieDetail = () => {
    const { movieId } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d6f26682ba4bf575c167473c911bdd4c&language=en-US`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setMovies(json.results)
            })
    }, [movieId])


    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <span>{movie.vote_average}</span>
                </div>



            ))}
        </div>
    )
}