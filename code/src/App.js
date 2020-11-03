import React, { useState, useEffect } from 'react'
import { MoviePoster } from './MoviePoster'
const API_v3_KEY = 'f969c3f19f84733bab447597689e9ea0'



export const App = () => {
  const API_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_v3_KEY}`
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        return response.json()
      })
      .then(json => {
        setMovies(json.results)

      })
  }, [])
  console.log(movies)
  
  return (
    <div>
      {
        movies.map(movie => {
          return <MoviePoster key={movie.id} {...movie}/>
        })
      }
    </div>
  )
}
