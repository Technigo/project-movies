import React from 'react'

export const MoviePoster = ({ title, release_date, poster_path}) => {
    const IMAGE_BASE_URL='https://image.tmdb.org/t/p/w342'

    return (
        <div>

    <p>{title} {release_date}</p>
     <img src={`${IMAGE_BASE_URL + poster_path}`}></img>

        </div>
    )
}