import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  
  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`, {
  //     method: 'GET'
  //   })
  //   .then(response => response.json())
  //   .then(json => {
  //     console.log(json.results)
  //     setMovies(json.results)
  //   })
  // }, [])

  const params = useParams()
  console.log(params)
  return (
    <div className='movie-details'>{params.movieId}</div>
  )
}

export default MovieDetails