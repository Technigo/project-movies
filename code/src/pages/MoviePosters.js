import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const MoviePosters = () => {
  const [posters, setPosters] = useState([])
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=7bad066f3ffa3daf68ae80d43ff12b31&language=en-US&page=1'
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setPosters(json.results)
      })
  }, [])

  return (
    <div className="postersCont">
      {posters.map((poster) => (
        <div className="posters" key={poster.id}>
          <Link to={`details/${poster.id}`}><img src={`http://image.tmdb.org/t/p/w342/${poster.poster_path}`} alt="" /></Link>

        </div>
      ))}
    </div>

  )
}

