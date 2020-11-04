import React from 'react'; 
import { Link } from 'react-router-dom'; 

export const MovieCard = ({id, poster_path, original_title, release_date}) => {
  return (
    <>
     <div className='movie-card'>
        <Link to={`/movies/${id}`}>
          <img className='movie-card-image' 
            src={`https://image.tmdb.org/t/p/w342/${poster_path}`} 
            alt={`${`original_title`}poster`} />
          <div className='text-overlay'>
            <h1>{original_title}</h1>
            <p>{`Release Date: ${release_date}`}</p>
          </div>
        </Link>
    </div>
  </> 
  )
}

