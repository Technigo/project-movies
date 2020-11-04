import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const MovieThumb = ({ name, background_img, slug }) => {
  const { id } = useParams()

  return (
    // <Link to={`/movies`${slug}}>
<section className="movie-thumb">
  {name}
  <div className="movie-thumb-image-section">
    <img className="movie-thumb-image" src={background_img} alt={name} />
    <p className="movie-thumb-image-description">4.5</p>
  </div>
</section>
// </Link>
  )
}
