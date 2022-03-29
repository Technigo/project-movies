import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const PopularList = () => {
const [movies, setMovies] = useState([])

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ec7efa21217def88014fde963c7b7190&language=en-US&page=1`)
    .then((res) => res.json())
    .then((json) => {
        setMovies(json.results[0])
        console.log(json)
    })
}, [])

    return(
        <div>{movies.original_title}</div>
    )
}