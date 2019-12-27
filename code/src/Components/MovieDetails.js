import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { MovieBackground, MovieDetailsDescription, FlexWrapper, BackButtonWrapper, BackArrowIcon, BackButtonTitle } from './styles'
import backArrow from '../static/backArrow.svg'


const MovieDetails = () => {
  const [movie, setMovie] = useState()
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const apiKey = "34f303052aebcecccf74022a56b92eee"

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        setMovie(json)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (!movie) {
    return <h1>Movie not found!</h1>
  }

  return (
    <FlexWrapper>
      <MovieDetailsDescription>
        <Link to={'/'}>
          <BackButtonWrapper>
            <BackArrowIcon src={backArrow} alt="" />
            <BackButtonTitle >Movies</BackButtonTitle>
          </BackButtonWrapper>
        </Link>
        <div style={{ margin: "1rem" }}>
          <h1>{movie.title}</h1>
          <h2>Rating {movie.vote_average}/10</h2>
          <p>{movie.overview}</p>
        </div>
      </MovieDetailsDescription>
      <MovieBackground path={movie.backdrop_path} />
    </FlexWrapper>
  )
}

export default MovieDetails
