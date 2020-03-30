import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export const FilmInfo = () => {
  const {filmId} = useParams()
  const [movies, setMovies] =useState([])
  let backgroundUrl = `http://image.tmdb.org/t/p/w1280"${movies.backdrop_path}`

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=095b0eff24360a92b50f50bfecf730fb`)
    .then ((res) => res.json())
    .then ((json) => {
      setMovies(json)
    })
  }, [filmId])

  if (!movies) {
    return <></>
  }

  return (
    <div>
    
      <div key={movies.id}>
        <div className="dataDiv" style={{backgroundImage: `url(${backgroundUrl})`}}></div>
        {/* <img src={`http://image.tmdb.org/t/p/w300${movies.backdrop_path}`} alt={movies.original_title} /> */}
        <h2>{movies.original_title}</h2>
        <p>{movies.overview}</p>

        </div>
   
     
   
    </div>
  )
}