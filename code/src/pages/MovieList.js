import React, { useEffect, useState } from 'react'

export const MovieList = () => {
  const [movies, setMovies] = useState ([])


const API_KEY = "d18f9e3ce26c7875c97d06084254693a";
const URL_POPULAR_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    fetch(URL_POPULAR_MOVIES)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results)

      })

  }, [])

  return (
    <div>
      Movie List
    </div>
  )
}