import React from 'react'

export const MovieCard = ({title, release_date, poster_path}) => {
  return (
    <div>
      <img src={`http://image.tmdb.org/t/p/w342/${poster_path}`} />
      <h2>
        {title}
      </h2>
      <h3>
        {`Released ${release_date}`} 
        </h3>
    </div>

  )
}

