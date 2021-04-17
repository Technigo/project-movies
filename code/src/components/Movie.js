import React from 'react'
import { Link } from 'react-router-dom'

export const Movie = ({ title, poster_path, release_date, id }) => {

  const image_url = `https://image.tmdb.org/t/p/w1280${poster_path}`

  return (
    <Link to = {`/movie/${id}`}>
        <div className='image-container'>
          <img className='movie-img' src={image_url} alt='movie poster'/>
        </div>
        <div className="text-container">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="release">
            <h2>Released {release_date}</h2>
          </div>
        </div>
    </Link>
  )
}
