import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieInfo = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        // fetch(`https://api.themoviedb.org/3/movie/{movieid}?api_key={api_key}&language=en-US`)
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=0acc5941943be92854a9966e91961a97&language=en-US`)
            .then((res) => res.json())
            .then((json) => {
                setMovie(json)
                console.log(json)
            })
    }, [movieId])

    return (

        <div>
            <h1>{movie.overview}</h1>

            {/* {movies.map((movie) => (
                <div key={movieId}>
                   
                </div> 
            ))} */}

        </div>
    )
}

