import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./PopularList.css"

export const PopularList = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=55cd0e0e418083e581aec6766c6a1677&language=en-US`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
            setMovie(json)
        })
}, [movieId])

  return (

    <article 
      
      className="detailPage">

        <a 
        
          class="backLink" href="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" 
          fill="#fff" fill-rule="evenodd"> </path>
          
          </svg> 
          <p>Movies</p>
          
          </a>

          <div 
          
          className="background"style={{ backgroundImage: 
          `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }} alt="movie.original_title" >

          </div>


          <div 
          
            className="summary">
        
        
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="movie.original_title" />

            <div 
              
              className="details">

              <h1> {movie.original_title} </h1>

              <span 
                
                class="rating">
                {movie.vote_average}
              </span>
              
              <p> {movie.overview} </p>

            </div>

          </div>

          


    </article>
  )
}