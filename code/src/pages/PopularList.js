import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Detail } from './Detail'

export const PopularList = () => {
  const [movies, setMovies] = useState([])

  const api_key = 'dcb0caab506cac37c3f7dc479ca8aee2'
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setMovies(json.results)

      })
  }, [])



  return (
    <div className="main-container">
      {movies.map((movie) => (

        //<div className="poster-image" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w342${movie.poster_path})` }} >
        <Link to={`/movie/${movie.id}`}>
          <Detail movie={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} title={movie.original_title} release={movie.release_date} />
        </Link>


      ))}
    </div >
  )

}
//

//</Link>