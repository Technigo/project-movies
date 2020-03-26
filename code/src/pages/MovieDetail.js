import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = (props) => {
  const { apiKey } = props
  const { movieId } = useParams()
  const [movieDetail, setMovieDetail] = useState()
  const [runtime, setRuntime] = useState()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovieDetail(json)
        setRuntime(json.runtime)
      })
  }, [movieId, apiKey])

  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60

  return (
    <section>
      {movieDetail && (
        <>
          <h1>{movieDetail.title}</h1>
          <p>{hours} h {minutes} minutes</p>

          <h5>{movieDetail.genres[0].name} | {movieDetail.genres[1].name}</h5>

          <h4>{movieDetail.vote_average} ({movieDetail.vote_count})</h4>
          <a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${movieDetail.imdb_id}/`}>IMDb</a>
          <p>{movieDetail.overview}</p>

        </>
      )}
    </section>
  )
}