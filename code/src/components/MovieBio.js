import React from 'react'

export const MovieBio = ({ title, poster_path, overview }) => {
  return (
<article>
  <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={title}/>
  <h2>{title}</h2>
  <p>{overview}</p>
</article>
)};