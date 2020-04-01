import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import '../style/movieInfo.css'

export const MovieInfo = () => {
  const { movieInfo } = useParams();
  const [info, setInfo] = useState();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieInfo}?api_key=ef0fb1aeba7a73c8909c5037c23fc608&language=en-US`)
    .then(res => res.json())
    .then(json => setInfo(json))
  }, [movieInfo]);

  if(!info){
    return <></>;
  }

  return (
    <article className="info-container">
      <div className="poster-container"><Link className="back" to="/"><i className="arrow-right"></i>Movies</Link>
        <img className="poster" src={`https://image.tmdb.org/t/p/w300${info.poster_path}`} />
      </div>
      <div className="info-text">
        <div className="title-and-rating">
          <h3>{info.original_title}</h3>
          <h4>{info.vote_average}/10</h4>
        </div>
      <p>{info.overview}</p>
      </div>
    </article>
  )
}
/*
<img className="bakground-image" src={`https://image.tmdb.org/t/p/w1280${info.backdrop_path}`} />*/