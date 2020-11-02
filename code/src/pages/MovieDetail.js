import React from 'react';
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
    const params = useParams();
    console.log(params)
    return (
        <div>
            {/* <h2>hi</h2>
            <h2>{title}</h2>
            <p>{release}</p>
            <p>{overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            <img src={`https://image.tmdb.org/t/p/w1280${backdrop}`} alt={title} /> */}
        </div> 
    )
}