import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { BackIcon} from'../components/BackIcon'
import '../style/movieInfo.css'

export const MovieInfo = () => {
  const { movieInfo } = useParams();
  const history = useHistory();
  const [info, setInfo] = useState();
  const [statusCode, setStatusCode] = useState(200);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieInfo}?api_key=ef0fb1aeba7a73c8909c5037c23fc608&language=en-US`)
    .then(res => {
      setStatusCode(res.status);
      return res.json();
    })
    .then(json => setInfo(json))
  }, [movieInfo]);

  useEffect(() => {
    if (statusCode !== 200) {
      history.push("/");
    }
  }, [history, statusCode])

  if(!info){
    return <></>;
  }

  return (
    <article className="info-container" style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), 
            url(https://image.tmdb.org/t/p/w1280${info.backdrop_path})`
      }}>
      <div className="poster-container"><Link className="back-big-screen" to="/"><BackIcon /><h5>Movies</h5></Link>
        <img className="poster" src={`https://image.tmdb.org/t/p/w300${info.poster_path}`} alt={info.title}/>
      </div>
      <div className="info-text">
        <div className="title-and-rating">
          <h3>{info.title}</h3>
          <h4>{info.vote_average}/10</h4>
        </div>
      <p>{info.overview}</p>
        <div className="when-hidden">
        <Link className="back" to="/"><BackIcon /><h5>Movies</h5></Link>
      </div>
      </div>
    </article>
  )
}