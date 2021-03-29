import React, {useState, useEffect } from 'react'

import { MOVIE_LIST_URL, MOVIE_BACKDROP_URL } from '../reusable/Urls.js'


/* results": [
    {
    "adult": false,
    "backdrop_path": "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
    "genre_ids": [
    28,
    12,
    14,
    878
    ],
    "id": 791373,
    "original_language": "en",
    "original_title": "Zack Snyder's Justice League",
    "overview": "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
    "popularity": 12069.58,
    "poster_path": "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    "release_date": "2021-03-18",
    "title": "Zack Snyder's Justice League",
    "video": false,
    "vote_average": 8.7,
    "vote_count": 3942 */


    



export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(MOVIE_LIST_URL)
        .then(res => res.json())
        .then(json => setMovies(json.results))
  },[])

console.log(movies)

  return (
  
      <section>
       movielist: {movies.map(movie => (
         <section key={movie.id}>
           <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}/>
           {movie.title}
           {movie.release_date}
         </section>
      ))}
      </section>
  )
} 



