import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import "./popularlist.css"
import { Loader } from "Loader"
import { NavButtons } from "NavButtons"
import { ChangeApi } from "ChangeApi"

export const PopularList = (props) => {
    const { films, setFilms, pageNumber, setPageNumber, api, setApi } = props
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setIsLoading(true)
        fetch(`https://api.themoviedb.org/3/movie/${api}?api_key=11a30ee49cca0ec90b41dc63ab197a6d&language=en-US&page=${pageNumber}`)
            .then((res) => res.json())
            .then((data) => {
                setFilms(data.results)
                setIsLoading(false)
            })
    }, [pageNumber, api])

    return (
        <section>
            <section className="flex-container">
                {isLoading && <Loader />}
                {!isLoading && films.map((film) => {
                    return (
                        <Link className="film-card" to={`/films/${film.title}`} key={film.id}>
                            <img className="film-poster" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
                            <article className="poster-text">
                                <h1 className="film-title">{film.title}</h1>
                                <h2 className="release-date">Released {film.release_date}</h2>
                            </article>
                        </Link>
                    )
                })}
            </section>
        </section>
    )
}
