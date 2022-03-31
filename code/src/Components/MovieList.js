import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'

export const MovieList = ({movieList}) => {
    console.log('movielist', movieList)

    const [sorting, setSorting] = useState('')
    const [newMovieList, setNewMovieList] = useState(movieList)

    useEffect(() => {
        if (sorting === 'popularity'){
            const sortedMovieList = [...newMovieList]
            setNewMovieList(sortedMovieList.sort((a,b) => a.popularity < b.popularity ? 1 : -1))
           
        } else if (sorting === 'released') {
            const sortedMovieList = [...newMovieList]
            setNewMovieList(sortedMovieList.sort((a,b) => a.release_date < b.release_date ? 1 : -1))
           
        }
    }, [sorting])

    return(
        <main>
            <label htmlFor="sorting">
                 <select id="sorting" value={sorting} onChange={(e) => setSorting(e.target.value)}>
                    <option value="popularity">most popular</option>
                    <option value="released">recently released</option>
                </select>
            </label>
            <section className="main">
                {newMovieList.map((movie) => (
                    <Link to={`/details/${movie.id}`} className="movie-wrapper" key={movie.id}>
                    <div className="movie">
                        <img className="poster-img"src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="movie poster"/>
                    </div>
                        <div className="overlay">
                        <h1>{movie.title}</h1>
                        <p>Released {movie.release_date}</p>
                        </div>
                    </Link>   
                ))}
            </section>
        </main>
    )
}