import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import backArrow from 'arrow.svg'
import { Link } from 'react-router-dom'

export const MovieDetails = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState([])

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=db37f43a686cbd6ad83202f3d97ecfb5&language=en-US&page=1`)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json)
        console.log(json.overview)
        console.log(json)
      })

  }, [id])

  const bgLink = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
  const bgImage = {
    backgroundImage: `url(${bgLink})`
  }

  return (
    <div>
      <div style={bgImage}>

        <div className="moviePage">
          <Link to={`/`}>
            <div className="backBtn">
              <img src={backArrow} alt="back-button"></img>

            </div>
          </Link>

          <div className="detailImg">
            <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
          </div>

          <div className="moviePageDetail">
            <h1>{movie.title}</h1>
            <p>{movie.vote_average}</p>
            <h2>{movie.overview}</h2>
          </div>

        </div>

      </div>
    </div>
  )

}