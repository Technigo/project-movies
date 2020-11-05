import React from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails  = () => {
    const { key } = useParams();
    console.log(key);

    return (
        <section clasName="movie-details">
           {key}
        </section>
    )
}

