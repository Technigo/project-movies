import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './movieList.css'

export const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [category, setCategory] = useState('popular')
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=588b25e1c43b79eebc0f7d2f0c56a882&language=en-US&page=1`)
            .then(res => res.json())
            .then(json => {
                setMovies(json.results)
                console.log(json.results)
                setLoading(false)
            })
    }, [category])

    if (loading) {
        return <h1>LOADING!</h1>
    }

    return (
        <main>
            <nav>
                <h1>Movie List</h1>
                <div className="dropdown">
                    <p>Category: </p>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="popular">Popular</option>
                        <option value="top_rated">Top Rated</option>
                        <option value="upcoming">Upcoming</option>
                    </select>
                </div>
            </nav>
            <article className="movieList">
                {movies.map(movie => (
                    <Link key={movie.id} to={`/movies/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                        <div className="details">
                            <h1>{movie.title}</h1>
                            <p>Released {movie.release_date}</p>
                        </div>
                    </Link>
                ))}
            </article>
        </main>
    )
}