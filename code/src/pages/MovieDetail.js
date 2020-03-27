import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = (props) => {
  const { apiKey } = props
  const { movieId } = useParams()
  const [movieDetail, setMovieDetail] = useState()
  const [trailer, setTrailer] = useState([])
  const [runtime, setRuntime] = useState()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovieDetail(json)
        setRuntime(json.runtime)
      })
  }, [movieId, apiKey])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setTrailer(json.results)
      })
  }, [movieId, apiKey])

  const hours = Math.floor(runtime / 60)
  const minutes = runtime % 60

  if (!movieDetail || !runtime || !trailer[0]) {
    return (
      <>
        <section>
          <h1>Oh no, there's an error</h1>
          <a className="return-button" href="/">Return</a>
        </section>
      </>
    )
  }

  return (
    <section>
      {movieDetail && (
        <>
          <img src={`https://image.tmdb.org/t/p/w342${movieDetail.poster_path}`} alt="" />
          <article>
            <h1>{movieDetail.title}</h1>
            <p>{hours} h {minutes} minutes</p>
            <h5>{movieDetail.genres[0].name} | {movieDetail.genres[1].name}</h5>
            <p>{movieDetail.overview}</p>
            <h4>{movieDetail.vote_average}/10 ({movieDetail.vote_count})</h4>
            <a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${movieDetail.imdb_id}/`}>IMDb</a>
            {trailer && (<a target="_blank" rel="noopener noreferrer" href={`https://www.youtube.com/watch?v=${trailer[0].key}`}>Trailer</a>)}
          </article>
        </>
      )}
    </section>
  )
}