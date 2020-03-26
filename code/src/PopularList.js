import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export const PopularList = (props) => {
    const { films, setFilms } = props

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=11a30ee49cca0ec90b41dc63ab197a6d&language=en-US&page=1')
            .then((res) => res.json())
            .then((data) => {
                setFilms(data.results)
                console.log(films)
                console.log(data)
            })
    }, [])

    return (
        films.map((film) => {
            return <Link to={`/films/${film.title}`} key={film.id}><img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt=""></img></Link>
        })
    )
}