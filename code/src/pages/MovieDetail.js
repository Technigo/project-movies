import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Error } from '../components/Error'
import { Detail } from '../components/Detail'

export const MovieDetail = (props) => {
  const { apiKey, loading, setLoading } = props
  const { movieId } = useParams()
  const [movieDetail, setMovieDetail] = useState()
  const [trailer, setTrailer] = useState([])
  const [runtime, setRuntime] = useState()
  const [imgUrl, setImgUrl] = useState()

  const background = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280${imgUrl})`
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        setMovieDetail(json)
        setRuntime(json.runtime)
        setImgUrl(json.backdrop_path)
        setLoading(false)
      })
  }, [movieId, apiKey, setLoading, setImgUrl])

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
    <>
      {!loading &&
        <section style={background} className="movie-detail-container">
          {movieDetail && (
            <>
              <Detail runtime={runtime} trailer={trailer} {...movieDetail} />
            </>
          )}
        </section>
      }
    </>
  )
}