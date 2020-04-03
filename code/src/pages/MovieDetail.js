import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import 'pages/movie-detail.css'

export const MovieDetail = () => {
  const { id } = useParams()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b2d2d0205b4ac1ee806c10f3c7abcb87&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setMovies(json)
      })

  }, [id])



  return (
    <div>
      <div className='backDrop' style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path})` }} alt={"movie.original_title"}>
        <Link className="backLink" to="/">
          <svg className="arrow"
            width={438.533}
            height={438.533}
            viewBox='0 0 438.533 438.533'>
            <path d='M409.133 109.203c-19.608-33.592-46.205-60.189-79.798-79.796C295.736 9.801 259.058 0 219.273 0c-39.781 0-76.47 9.801-110.063 29.407-33.595 19.604-60.192 46.201-79.8 79.796C9.801 142.8 0 179.489 0 219.267c0 39.78 9.804 76.463 29.407 110.062 19.607 33.592 46.204 60.189 79.799 79.798 33.597 19.605 70.283 29.407 110.063 29.407s76.47-9.802 110.065-29.407c33.593-19.602 60.189-46.206 79.795-79.798 19.603-33.596 29.403-70.284 29.403-110.062.001-39.782-9.8-76.472-29.399-110.064zm-120.487 197.71c3.621 3.614 5.435 7.901 5.435 12.847 0 4.948-1.813 9.236-5.435 12.847l-29.126 29.13c-3.61 3.617-7.891 5.428-12.84 5.421-4.951 0-9.232-1.811-12.854-5.421L104.21 232.111c-3.617-3.62-5.424-7.898-5.424-12.848 0-4.949 1.807-9.233 5.424-12.847L233.826 76.795c3.621-3.615 7.902-5.424 12.854-5.424 4.949 0 9.229 1.809 12.84 5.424l29.126 29.13c3.621 3.615 5.435 7.898 5.435 12.847 0 4.946-1.813 9.233-5.435 12.845L201 219.267l87.646 87.646z' fill='#fff' />
          </svg><span className="backLinkText">Movies</span>
        </Link>
        <div className='detailWrapper'>
          <img className='poster' src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} alt={'movie.original_title'} />
          <div className='detailsInfo'>
            <h2>{movies.original_title}</h2>
            <p className='vote'>{movies.vote_average} /10</p>
            <p>{movies.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}