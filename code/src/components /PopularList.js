import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const PopularList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=91be6b751a25062269fa48eb99e10f7a&language=en-US&page=1`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setMovies(json.results)
            })
    }, [])


    return (
        <div>
            {movies.map(movie => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} />
                    <h1>{movie.title}</h1>
                </Link>
            ))}
        </div>
    )
}

