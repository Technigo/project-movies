import React, { useEffect, useState} from 'react'
import { useParams } from "react-router-dom"


export const MovieDetails = () => {
    const { id } = useParams()
    console.log(id)

    const [movies, setMovies] = useState([])

    const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=d1212c48c1a2b13b12dd27882d072960&language=en-US`
    
    useEffect(() => {
        fetch(MOVIE_URL)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setMovies(json)
            })

    }, [id])

    

    return (
        <div>
                <div>
                    <h1>{movies.original_title}<span>{movies.vote_average}/10</span></h1>
                    <img src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}  />
                    <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}  />
                    <p>{movies.overview}</p>
                    
                    
                </div>
                
        </div>
    )
}


