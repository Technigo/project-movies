import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
    <div>
      <img src={`https://image.tmdb.org/t/p/w300${info.poster_path}`} />
      <img src={`https://image.tmdb.org/t/p/w300${info.backdrop_path}`} />
      <h3>{info.original_title}</h3>
      <h4>{info.vote_average}</h4>
      <p>{info.overview}</p>
    </div>
  )
}