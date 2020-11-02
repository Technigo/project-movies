import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const { id } = useParams()
  const [details, setDetails] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=40be626d591abb41158713818687432b&language=en-US`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      setDetails(json)
    })
  
  },[])

  const movieDetailStyle = {
    backgroundImage: `url("http://image.tmdb.org/t/p/w1280${details.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }
  
  return (
    <article className="movie-detail" style={movieDetailStyle} >
      
        <div key={details.id} className="details">
          <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.original_title} />
          <h2>{details.original_title}</h2>
          <h3>{details.vote_averge}</h3>
          <p>{details.overview}</p>
        </div>
    </article> 
    
  )
}