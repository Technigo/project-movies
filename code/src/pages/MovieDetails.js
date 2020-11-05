import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'

export const MovieDetails = () => {
  const { id } = useParams()
  const [details, setDetails] = useState([])
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=40be626d591abb41158713818687432b&language=en-US`)
    .then((res) => res.json())
    .then((json) => {
      console.log(json)
      setDetails(json)
      setLoading(false)
    })
  },[id])

  const movieDetailStyle = {
    backgroundImage: `url("http://image.tmdb.org/t/p/w1280${details.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }
  
  return (
    <>
    {loading && <Loader /> }
    {!loading && (
      <article className="movie-detail" style={movieDetailStyle} >
          <div key={details.id} className="details">
            <img className="poster" src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.original_title} />
            <div className="summary">
              <h2>{details.title}</h2>
              <h3>{details.vote_average}/10 ({details.vote_count} votes) </h3>
              <h3 className="runtime">Runtime {details.runtime} minutes </h3>
              <a className="imdb" href={`https://www.imdb.com/title/${details.imdb_id}`}>
                <img src="../images/imdb.svg" className="imdb-logo"/></a>
              <p className="overview">{details.overview}</p>
            </div>  
          </div>
      </article> 
    )}
    </>
  )
}