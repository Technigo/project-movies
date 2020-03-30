import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Trailer } from 'components/Trailer'

export const Detail = (props) => {
  const { trailer, runtime, poster_path, title, genres, overview, vote_average, vote_count, imdb_id } = props
  const [isOpen, setIsOpen] = useState(false)

  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <article >
        <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="" />
        <div className="movie-details">
          <h1>{title}</h1>
          <p>{hours} h {minutes} min <FontAwesomeIcon icon={['far', 'clock']} /></p>
          <h5>{genres[0].name} | {genres[1].name}</h5>
          <p>{overview}</p>
          <h4>{vote_average}/10 ({vote_count}) <FontAwesomeIcon icon={['far', 'star']} /></h4>
          <a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${imdb_id}/`}>IMDb <FontAwesomeIcon icon={['fab', 'imdb']} /></a>
          {trailer && (<a onClick={toggleModal} >Trailer <FontAwesomeIcon icon={['fab', 'youtube-square']} /></a>)}
        </div>
        {isOpen ? (<Trailer trailer={trailer[0].key} setIsOpen={setIsOpen} isOpen={isOpen} />) : null}
      </article>
    </>
  )
}