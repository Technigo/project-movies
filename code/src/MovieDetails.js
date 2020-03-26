import React from 'react'
import {useParams} from 'react-router-dom'

export const MovieDetails = () => {
    const params = useParams

    return (
        <article>
            <p>have fun</p>
        </article>
    )
}
//https://api.themoviedb.org/3/movie/550?api_key=1ff77d3fb46cefb77c7370504c6cb69d