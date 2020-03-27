import React, { useState, useEffect } from "react"
import { useParams, Link, useHistory } from "react-router-dom"
import "./filmdetail.css"
import { ReactComponent as BackSvg } from "./back.svg"
export const FilmDetails = (props) => {
    const { films, setViewCount } = props
    const history = useHistory()
    const params = useParams()
    const selectedFilm = films.find((film) => film.title === params.title)
    const [seen, setSeen] = useState(localStorage.getItem(`${selectedFilm.id}`))
    console.log(selectedFilm)

    if (!selectedFilm) {
        history.push('/')
        console.log('error')
    }
    const handleClick = () => {
        localStorage.setItem(`${selectedFilm.id}`, true)
        setSeen(localStorage.getItem(`${selectedFilm.id}`))
        let views = (+localStorage.getItem('viewCount') > 0) ? +localStorage.getItem(`viewCount`) : 0
        localStorage.setItem(`viewCount`, parseInt(++views))
        setViewCount(localStorage.getItem('viewCount'))
    }
    return (
        <section className="film-detail-container" style={{
            backgroundImage: `radial-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), 
            url(https://image.tmdb.org/t/p/w1280${selectedFilm.backdrop_path})`
        }}>
            < article className="left-column" >
                <Link className="back-button" to="/">
                    <BackSvg className="button-icon" />
                    <span className="back-text">Movies</span>
                </Link>
                <img className="film-img" src={`https://image.tmdb.org/t/p/w342${selectedFilm.poster_path}`} alt={selectedFilm.title} />
            </article >
            <article className="right-column">
                <h1 className="film-name">{selectedFilm.title}<span className="film-rating">
                    {selectedFilm.vote_average}/10</span></h1>
                <p className="film-description">{selectedFilm.overview}</p>
                {seen && <p className="seen-text">I have seen this film.</p>}
                {!seen &&
                    <div className="seen-button-container">
                        <button className="seen-button" onClick={handleClick}>Seen</button>
                        <p className="seen-text">I have not seen this film.</p>
                    </div>}
            </article>
        </section >

    )
}