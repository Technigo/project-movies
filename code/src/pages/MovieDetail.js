import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
    const { id } = useParams()
    const [movies2, setMovies2] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2e6a7b75ad4d088fae1f52620044bef7&language=en-US`)
        .then((res) => res.json())
        .then((json) => setMovies2(json))
    },[])

    console.log(movies2)
    return (
        <div>
            {movies2.map((y) => (
                <div>
                    <h1>{y.movies2.original_title}</h1>
                </div>
            ))}
        </div>
    )
}

export default MovieDetail


/*

   {movies.map((movie) => (
                <div>
                    <h1>{movie.original_title}</h1>
                    <h3>{movie.overview}</h3>
                    <h3>{movie.vote_avarage}</h3>
                    <img src={movie.backdrop_path} alt={movie.title} />
                </div>

            )
            )}


*/