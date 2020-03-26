import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "./filmdetail.css"

export const FilmDetails = (props) => {
    const { films } = props
    const test = useParams()
    const selectedFilm = films.find((film) => film.title === test.title)
    console.log(selectedFilm)
    return (
        <section className="film-detail-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${selectedFilm.backdrop_path})` }}>
            <h1>{selectedFilm.title}</h1>
        </section >

    )
}