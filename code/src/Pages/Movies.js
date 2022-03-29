import React, { useEffect, useState } from 'react'

export const Movies = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=3d84d8a2e7d9f4fcf68bb05afb8dd7ef&language=en-US&page=1')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setMovie(json.results)
      })
  }, [])

  return (
    <div>
      Movies page
    </div>
  )
}

// API key for The Movie Data Base: 3d84d8a2e7d9f4fcf68bb05afb8dd7ef //