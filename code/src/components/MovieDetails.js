import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
    const { movieId } = useParams()
    const [movies, setMovies] = useState([])

    useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=057cd4e552ae112195cad4ea9c32ccdb&language=en-US`)
    .then((res) => res.json())
    .then((json) => {
        setMovies(json)
    })
}, [movieId])

return (
    <section>
        <img src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={movies.original_title} />
        
    </section>
)
}