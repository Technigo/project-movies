import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Movie } from 'component/Movie'
import 'component/movielist.css'

export const MovieList = () => {
  const [data, setData] = useState([])

  const MOVIE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=5f9ddb234f53171b24352c9e5988b098&language=en-US&page=1'

  useEffect(() => {
    fetch(MOVIE_URL)
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.log(error))
  }, [])

  return (
    <section className="movieMenu">
      {
        data.map((item) => (
          <Link key={item.id} to={`/movie/${item.id}`}>
            <img className="movieImageSize" src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={item.original_title} />
            <div className="movieOverview">
              <h1>{item.title}</h1>
              <p>Released {item.release_date}</p>
            </div>
          </Link>
        ))
      }

    </section>
  )
}

// API :
// 5f9ddb234f53171b24352c9e5988b098

// EXAMPLE REQUEST:
// https://api.themoviedb.org/3/movie/550?api_key=5f9ddb234f53171b24352c9e5988b098
// https://api.themoviedb.org/3/movie/popular?api_key=5f9ddb234f53171b24352c9e5988b098&language=en-US&page=1

// DOCS:
// https://developers.themoviedb.org/3