import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Movie } from '../components/Movie'
import { MOVIELIST__URL, NOW_PLAYING__URL, TOP_RATED__URL, UPCOMING__URL } from '../components/URLS'

import '../styles/movielist.css'

export const MovieList = () => {
  const [movies, setMovies] = useState([])
  const { category } = useParams(); 

  const getURL = (category) => {
    if (category === 'top_rated') {
      return TOP_RATED__URL
    } else if (category === 'upcoming') {
      return UPCOMING__URL
    } else if (category === 'now_playing') {
      return NOW_PLAYING__URL
    }
    return MOVIELIST__URL
  }


  const getMovieList = () => {
    fetch(getURL(category))
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setMovies(data.results)
      })
  }

  useEffect(() => {   
    getMovieList()
    // eslint-disable-next-line
  }, [category])

  return (

    <section className='movielist__container'>
      {movies.map((movie) => (
        <span key={movie.id}>
          <Link to={`movie/${movie.id}`}>
            <Movie {...movie} />
          </Link>
        </span>
      ))}
    </section>
  )
}
