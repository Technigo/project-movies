import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Detail = (props) => {
  const { trailer, runtime, poster_path, title, genres, overview, vote_average, vote_count, imdb_id } = props

  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60

  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="" />
      <article>
        <h1>{title}</h1>
        <p>{hours} h {minutes} minutes <FontAwesomeIcon icon={['far', 'clock']} /></p>
        <h5>{genres[0].name} | {genres[1].name}</h5>
        <p>{overview}</p>
        <h4>{vote_average}/10 ({vote_count}) <FontAwesomeIcon icon={['far', 'star']} /></h4>
        <a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${imdb_id}/`}>IMDb <FontAwesomeIcon icon={['fab', 'imdb']} /></a>
        {trailer && (<a target="_blank" rel="noopener noreferrer" href={`https://www.youtube.com/watch?v=${trailer[0].key}`}>Trailer <FontAwesomeIcon icon={['fab', 'youtube-square']} /></a>)}
      </article>
    </>
  )
}