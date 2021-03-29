import React from 'react'
import { useParams } from "react-router-dom"


export const MovieDetails = () => {
    const { id } = useParams();

    const image = `https://api.themoviedb.org/3/movie/${id}?api_key=d1212c48c1a2b13b12dd27882d072960&language=en-US`

    return (
        <div>
            <div>
                {/* <h1>{title}</h1> 
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/>
                <p>{release_date}</p> */}
                <img src={image} alt=""/>
            </div>
        </div>
    )
}


