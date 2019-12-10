import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieInfo = () => {
    const { movieId } = useParams()
    const [ movie, setMovie ] = useState ([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=3812b9925d12c2723ac148f3607b8bb5&language=en-US`)
        .then((res) => res.json())
        .then((json) => {
            setMovie(json)
            console.log(json)
        })
    }, [movieId])

    return(
         <div>
             <h1>{movie.overview}</h1>
             <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.original_title} />
             <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title} />
             <h2>{movie.original_title}</h2>
             <h2>{movie.vote_average}</h2>
                
       { /*     {movies.map((movie) => (
        //         <div key={movie.id}>
        //             <h1>{movie.overview}</h1>
        //         </div>
       //     ))} */}
        </div> 
    )
}