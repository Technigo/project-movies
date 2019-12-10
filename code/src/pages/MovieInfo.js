import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export const MovieInfo = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState([])


    useEffect(() => {
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
             <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.backdrop_path} />
             <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.poster_path} />
              <h2>{movie.original_title}</h2>
              <h3>{movie.vote_average}</h3>
            {/* {movies.map((movie) => ( */}
            {/* <div key={movieId}> */}

            {/* // </div>
            )) */}
        }
        
        </div >
    )
}



// `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`

// movie backdrop path

