import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const DetailPage = () => {
  const api_key = 'dcb0caab506cac37c3f7dc479ca8aee2'
  const { movieId } = useParams()
  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setDetails(json)
      })
  }, [movieId])
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt={details.backdrop_path} />

    </div>
  )
}