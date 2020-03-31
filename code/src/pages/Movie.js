// 
// ba52b3b5b6905f01165c6cc35c2a979c
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieList } from './MovieList'
import {Link, NavLink } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export const Movie = () => {
  const { movieId } = useParams()
  const [movies, setMovies ] = useState([])
  const [ loading, setLoading ] =useState(true)
 

  useEffect(() => {
    //same movie id as the param we used to destructure
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ba52b3b5b6905f01165c6cc35c2a979c&language=en-US`)
    .then((res) => res.json())
    .then((json) => { 
      setMovies(json)
      setLoading(false)
    })
    //we need to place this inside of the array so we can mount the site again if the id will change.
  }, [movieId])

  if (loading) {
    return <main className="loading"> <Loader type="TailSpin" color="gray"/></main>
  }

  return (
     <section className="backdrop-holder" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})`}}>
       <NavLink to="/" exact className="navButton"> <span role="img" className="icon">◀︎</span>Movies</NavLink>
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