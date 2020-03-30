import React, { useEffect, useState } from 'react'


export const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=b2d2d0205b4ac1ee806c10f3c7abcb87&language=en-US&page=1')
      .then((res) => res.json())
      .then((json) => {
        setMovies(json)
      })
  }, [])

  return (
    <div>
      Movie list
    </div>
  )
}