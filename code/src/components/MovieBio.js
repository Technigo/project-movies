import React from 'react'

import './moviebio.css'

export const MovieBio = ({ title, poster_path, overview }) => {
  return (
<article className="bio-section">
  <img className="poster-detail-image" src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title}/>
  <h2>{title}</h2>
  <p>{overview}</p>
</article>
)};