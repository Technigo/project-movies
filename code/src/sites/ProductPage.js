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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

    <section className="productPageContainer" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
      <div className="backToMovies">
        <Link className="goBack" to="/">
          <div className="backWrapper">
            <svg className="backButton" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
              <path d="M245,0C109.7,0,0,109.7,0,245s109.7,245,245,245s245-109.7,245-245S380.3,0,245,0z M308.2,335.5l-42.7,42.7L175,287.7L132.3,245l42.7-42.7l90.5-90.5l42.7,42.7L217.8,245L308.2,335.5z" />
            </svg>
            <p className="backToMoviesText">Movies</p>
          </div>
        </Link>
      </div>
      <div className="summary">
        <img className="detailImage" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title} />
        <div className="detailsText">
          <div className="titleRating">
            <h2 className="title">{details.title}</h2>
            <p className="rating">⭐ {Math.round(details.vote_average * 10) / 10}/10</p>
          </div>
          <div className="overview"><h3>{details.overview}</h3></div>
        </div>
      </div>
    </section>
  )
}