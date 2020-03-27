import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Error } from '../components/Error'
import { Detail } from '../components/Detail'

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

  if (!movieDetail || !runtime || !trailer[0]) {
    return (
      <Error />
    )
  }

  return (
    <section>
      {movieDetail && (
        <Detail runtime={runtime} trailer={trailer} {...movieDetail} />
      )}
    </section>
  )
}