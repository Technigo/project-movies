import React from 'react'

import './moviebio.css'

export const MovieBio = ({ title, vote_average, poster_path, overview }) => {
  return (
<article className="bio-section">
  <img className="poster-detail-image" src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title}/>
  <div className="bio-container">
    <h1 className="detail-title">{title} <span className="rating">{vote_average}/10</span> </h1>
    <p className="detail-overview">{overview}</p>
  </div>
</article>
)};