import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
  const { movieId } = useParams()
  const [detail, setDetail] = useState({})

  const MOVIE_URL = 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=a00dc273fb1eaa2bb4a4e6fed9fe4289&language=en-US'

  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a00dc273fb1eaa2bb4a4e6fed9fe4289&language=en-US`)
      .then (res => res.json())
      .then (data => setDetail(data))
  }, [movieId]);

    return <div>{detail.overview}</div>
}