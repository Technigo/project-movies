import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './popularlist.css'

export const PopularList = () => {
    const [movies, setMovies] = useState([])
    const [chosenList, setChosenList] = useState("popular")
    const apiKey = "91be6b751a25062269fa48eb99e10f7a"

    const chosenMovieList = movieList => {
        setChosenList(movieList)
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${chosenList}?api_key=${apiKey}&language=en-US&page=1`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setMovies(json.results)
            })
    }, [chosenList])


    return (
        <section className="movieMain">

            <section className="moviesWrapper">
                {movies.map((movie) => (
                    <article className="movieList" key={movie.id}>
                        <Link to={`movies/${movie.id}`}>
                            <img className="movieListPoster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                            <div className="movieListDetails">
                                <h1>{movie.title}</h1>
                            </div>
                        </Link>
                    </article>
                ))}
            </section>
        </section >
    )

}