import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

export const ProductPage = () => {
  const { slug } = useParams()
  const [details, setDetails] = useState({})
  console.log(slug)
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${slug}?api_key=70e43da479b5b8f5a366a40753e1b1e3&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data)
        console.log(details)
      })
  }, [slug])

  return (
    <section>
      <div>
        <Link className="goBack" to="/">
          <button className="goBackButton" type="button">go back
          </button>
        </Link>

      </div>

      <div className="detailsText">
        <div className="titleRating"><h2>{details.title}</h2>
          <p>{Math.round(details.vote_average * 10) / 10}/10</p>
        </div>
        <div className="overview"><h3>{details.overview}</h3></div>
      </div>
      <img className="movieImage" src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt={details.title} />
      <img className="movieBackdrop" src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt={details.title} />
    </section>

  )
}