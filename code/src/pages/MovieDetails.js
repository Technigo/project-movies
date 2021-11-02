import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const MovieDetails = () => {
  // const params = useParams()
  const { movieId } = useParams()
  const [details, setDetails] = useState({})
  // console.log(params)
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1cd9c12b0f59437cb1f892337285c32e&language=en-US`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
  }, [movieId])

  console.log('details:', details)
  return (
    <>
      <Link to='/'>
        <span>&#10688; Movies</span>
      </Link>
      <section className='movie-container'>
        {details.backdrop_path !== undefined && (
          <>
            {console.log('details backdrop:', details.backdrop_path)}
            <h1>{details.title}<span>{details.vote_average}</span></h1>
            <p>{details.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt={details.title} />
            <img src={`https://image.tmdb.org/t/p/w780${details.poster_path}`} alt={details.title} />
          </>
        )}
      </section>
    </>
  )
}

export default MovieDetails
