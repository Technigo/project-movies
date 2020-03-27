import React from 'react'

export const Detail = (props) => {
  const { trailer, runtime, poster_path, title, genres, overview, vote_average, vote_count, imdb_id } = props

  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60

  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt="" />
      <article>
        <h1>{title}</h1>
        <p>{hours} h {minutes} minutes</p>
        <h5>{genres[0].name} | {genres[1].name}</h5>
        <p>{overview}</p>
        <h4>{vote_average}/10 ({vote_count})</h4>
        <a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${imdb_id}/`}>IMDb</a>
        {trailer && (<a target="_blank" rel="noopener noreferrer" href={`https://www.youtube.com/watch?v=${trailer[0].key}`}>Trailer</a>)}
      </article>
    </>
  )
}