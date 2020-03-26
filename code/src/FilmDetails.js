import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import "./filmdetail.css"
import { ReactComponent as YourSvg } from "./back.svg"
export const FilmDetails = (props) => {
    const { films } = props
    const test = useParams()
    const selectedFilm = films.find((film) => film.title === test.title)
    console.log(selectedFilm)
    return (
        <section className="film-detail-container" style={{
            backgroundImage: `radial-gradient(rgba(0,0,0,0), rgba(0,0,0,.5)), 
            url(https://image.tmdb.org/t/p/w1280${selectedFilm.backdrop_path})`
        }}>
            < article className="left-column" >
                <Link className="back-button" to="/">
                    <YourSvg className="button-icon" />
                    <span className="back-text">Movies</span>
                </Link>
                <img className="film-img" src={`https://image.tmdb.org/t/p/w342${selectedFilm.poster_path}`} alt={selectedFilm.title} />
            </article >
            <article className="right-column">
                <h1 className="film-name">{selectedFilm.title}<span className="film-rating">
                    {selectedFilm.vote_average}/10</span></h1>
                <p className="film-description">{selectedFilm.overview}</p>
            </article>
        </section >

    )
}