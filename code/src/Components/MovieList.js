import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './movieList.css'

export const MovieList = () => {

  const MovieURL = ('https://api.themoviedb.org/3/movie/popular?api_key=3bb2ad59c76c83daa1fd97f0b4effa78&language=en-US&page=1')
  const [movieList, setMovieList] = useState([])
 
  useEffect (() => {
    fetch (MovieURL)
    .then ((res) => res.json())
    .then ((json) => {
      setMovieList(json.results)
    })
  }, [])

 

  return (
    <article>
      {movieList.map((title) => (
        <div key={title.id} className="mainSection">
          <div className="imageSection">
            <Link to={`/details/${title.id}`}>
            <img className="imgPosterSize" src= {`https://image.tmdb.org/t/p/w342${title.poster_path}`} alt={title.title}/>
            </Link>
            <div className="overlay">
              <h2>{title.title}</h2>
              <p>{title.vote_average}</p>
            </div>
          </div>
        </div>
      ))}
    </article>
  )
}