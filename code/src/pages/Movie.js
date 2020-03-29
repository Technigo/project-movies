// 
// ba52b3b5b6905f01165c6cc35c2a979c
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieList } from './MovieList'

export const Movie = () => {
  const { movieId } = useParams()
  const [movies, setMovies ] = useState([])
  
  let match 

  useEffect(() => {
    //same movie id as the param we used to destructure
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ba52b3b5b6905f01165c6cc35c2a979c&language=en-US`)
    .then((res) => res.json())
    .then((json) => { 
      setMovies(json)
      
      console.log('json', json)
      
      console.log(json.title)
     
    })
    //we need to place this inside of the array so we can mount the site again if the id will change.
  }, [movieId])

  return (
     <section className="backdrop-holder">
       <img src={` https://image.tmdb.org/t/p/w1280${movies.backdrop_path} `}></img>

        <article className="movie-card">
          <div className="album-cover">
          <img className="movie-cover-detail" src={` https://image.tmdb.org/t/p/w500${movies.poster_path} `}  alt={`${movies.title} cover image`} ></img>
       </div> 
        <div className="movie-info">
  <h1 className="title-detail">{movies.title} <span className="rating"> {movies.vote_average}</span></h1>
          <p className="info-detail">{movies.overview} </p>
          
          </div> 

        </article>
      </section>
  )
}