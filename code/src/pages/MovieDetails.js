import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  // const params = useParams()
  const { movieId } = useParams()
  const [details, setDetails] = useState({})
  // console.log(params)
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1cd9c12b0f59437cb1f892337285c32e&language=en-US`).then((res) => res.json()).then((data) => setDetails(data))
  }, [movieId])

  // console.log(details.title)
  return (
    <section className='movie-container'>
      <h1>{details.title}</h1>
      {/* <img src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt={details.title} /> */}
    </section>
  )
}

export default MovieDetails
