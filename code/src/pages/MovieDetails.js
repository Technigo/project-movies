import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import "pages/moviedetails.css"


export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([])
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cast, setCast] = useState([])

  const api_key = "363444609247127238629594b245e069"

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setMovieDetails(json)
        setLoading(false)
      })
  }, [id])

  //https://api.themoviedb.org/3/movie/330457/credits?api_key=363444609247127238629594b245e069  test link.
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`)
      .then((res) => res.json())
      .then((json) => {
        //console.log(json)
        setCast(json.cast.slice(0, 3))
        console.log(json.cast.slice(0, 3))
      })
  }, [id])

  if (loading) {
    return <div className="loading"><svg height="100" width="100">
      <circle className="circle" cx="50" cy="50" r="40" stroke=" #FFADAD" strokeWidth="5" fill="none" />
    </svg>
      <h2>LOADING...</h2></div>
  }

  if (!movieDetails.title) {
    return <h2>Sorry, no movie to display</h2>
  }

  return (
    <section className="movie-details">

      <div className="background-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})` }}>
        <Link to="/">
          <p className="go-back">Movies</p>
          <svg className="go-back-icon" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30">
            <path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z"
              fill="#fff"
              fillRule="evenodd">
            </path>
          </svg>
        </Link>
        <div className="movie-summary">
          <img src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt={movieDetails.id} />
          <div className="details">
            <div className="title-rate">
              <h2>{movieDetails.title}
                <span className="rating">{movieDetails.vote_average}/10</span></h2>
            </div>
            <div className="genre">
              {movieDetails.genres.map((genre) => (
                <p key={genre.name}>{genre.name}</p>
              ))}
            </div>
            <p>{movieDetails.overview}</p>
            <div className="companies">
              {movieDetails.production_companies.map((company) => (
                <p key={company.name}>{company.name}</p>
              ))}
            </div>
            <h4>Staring: </h4>
            <div className="cast">
              {cast.map((casts) => (
                <Link key={casts.id} to={`/cast/${casts.id}`}>
                  <p className="actors">{casts.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section >

  )
}
