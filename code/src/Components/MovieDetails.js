import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const APIKEY = process.env.REACT_APP_MOVIEDB_APIKEY;

const MovieDetails = ({ backdropSize }) => {
  
  const params = useParams()
  const [details, setDetails] = useState({})
  // const [divStyle, setDivStyle] = useState({})
  console.log(params)
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${APIKEY}&language=en-US`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      setDetails(json)
      console.log(json)
      
    })
  }, [])

  const divStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/${backdropSize}${details.backdrop_path})`
  }
  console.log(divStyle)

  return (
    <div className='movie-details' style={divStyle}>{params.movieId}</div>
  )
}

export default MovieDetails