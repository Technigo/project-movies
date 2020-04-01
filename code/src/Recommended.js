import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Loader } from "./Loader"
import "./popularlist.css"
export const Recommended = (props) => {
    const { films, recommendedFilms, setRecommendedFilms, pageNumber } = props
    const params = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const selectedFilm = films.find((film) => film.title === params.title) || recommendedFilms.find((film) => film.title === params.title)
        fetch(`https://api.themoviedb.org/3/movie/${selectedFilm.id}/recommendations?api_key=11a30ee49cca0ec90b41dc63ab197a6d&language=en-US&page=${pageNumber}`)
            .then((res) => res.json())
            .then(data => setRecommendedFilms(data.results))
        setIsLoading(false)
    }, [pageNumber])

    return (
        <section>
            <section className="flex-container">
                {isLoading && <Loader />}
                {!isLoading && recommendedFilms.map((film) => {

                    return (
                        <Link className="film-card" to={`/films/${film.title}`} key={film.id}>
                            <img className="film-poster" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} style={{ opacity: localStorage.getItem(`${film.id}`) ? ".2" : "1" }} />
                            {localStorage.getItem(`${film.id}`) && <p className="seen">Seen</p>}
                            {!film.poster_path && <p className="no-image-error-message">NO IMAGE TO LOAD</p>}
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