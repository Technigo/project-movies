import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API_DATA = 'https://api.themoviedb.org/3/movie/popular?api_key=ba52b3b5b6905f01165c6cc35c2a979c&language=en-US&page=1'
 
export const MovieList = () => {
  const [movies, setMovies] = useState([])

  //When the componant mount... just do it on mount (the empty array at the end tells us that)
  useEffect(() => {
    fetch(API_DATA) 
    .then((res) => res.json())
    //when we finally got out json we going to do something here...
    .then((json) => {
      setMovies(json.results)
    })
  }, [])
  
  return (
   <div className="flex">
     {movies.map((movie) => (
       <div key={movie.id} className="movieListCard"> 
       <Link to={`/movies/${movie.id}`}>
        <article className="linkis">
          <img src={` https://image.tmdb.org/t/p/w500${movie.poster_path} `} alt={movie.title} className="imgList"></img>
          <div className="titleList">
          <h2 className="margin">{movie.title}</h2>
          <h3 className="margin">Released {movie.release_date}</h3>
          </div>
        </article>
        </Link>
       </div>
     ))}
   </div>
  )
}


