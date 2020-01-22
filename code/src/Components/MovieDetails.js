import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const APIKEY = process.env.REACT_APP_MOVIEDB_APIKEY;
const MAXRATING = 10;

const MovieDetails = ({ backdropSize, posterSize }) => {
  
  const params = useParams()
  const [details, setDetails] = useState({})
  // const [divStyle, setDivStyle] = useState({})
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${APIKEY}&language=en-US`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      setDetails(json)
      console.log(json)
    })
  }, [params])

  const divStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/${backdropSize}${details.backdrop_path})`
  }

  return (
    <div className='movie-details' style={divStyle}>
      <a className="back-link" href="/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fill-rule="evenodd"></path></svg>
        Movies
      </a>
      <div className="summary">
        <img 
          src={`https://image.tmdb.org/t/p/${posterSize}${details.poster_path}`} 
          alt={`Poster for ${details.title}`}
        />
        <div className="details">

          <h1>{details.title} <span className="rating">{`${details.vote_average}/${MAXRATING}`}</span></h1>
          <p>{details.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails