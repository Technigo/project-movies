import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'pages/movie-detail.css'

export const MovieDetail = () => {
  const { id } = useParams()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b2d2d0205b4ac1ee806c10f3c7abcb87&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setMovies(json)
      })

  }, [id])



  return (
    <div>
      <h2>{movies.original_title}</h2>
      <p>{movies.vote_average} /10</p>
      <p>{movies.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w1280${movies.backdrop_path}`} alt={'movie.original_title'} />
      <img src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={'movie.original_title'} />
    </div>
  )

}