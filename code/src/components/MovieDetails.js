/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([])
  const { movieName } = useParams() // preferred version
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${_id}?api_key=1fb7c899a961ca96f61b53e4424dcf8e&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setMovieDetails(data.results))
    console.log(movieName)
  })

  const goBack = () => {
    navigate(-1) // to go back to previous page
  }
  return (
    <div>
      <p>{movieDetails.overview}</p>
      <p>I am the details component</p>
      <button type="button" onClick={goBack}>Go back</button>
    </div>
  )
}

export default MovieDetails