/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { API_KEY } from '../utils/urls';
import BackButton from './BackButton'

const SingleMovie = () => {
  const [singleMovie, setSingleMovie] = useState({})
  const { movieID } = useParams()
  const [productionClicked, setProductionClicked] = useState(false)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setSingleMovie(data))
  }, [movieID])

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {singleMovie.backdrop_path !== undefined && <div
        key={singleMovie.id}
        className="single-movie-page"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${singleMovie.backdrop_path})` }}>
        <BackButton />
        <div className="single-movie-page-details">
          <div className="single-movie-page-img-container">
            <img className="movie-img" src={`https://image.tmdb.org/t/p/w780${singleMovie.poster_path}`} alt={`${singleMovie.title}_image`} />
            <p className="single-movie-page-rating">⭐ {Math.round(singleMovie.vote_average * 10) / 10}</p>
          </div>
          <div className="single-movie-page-text-container">
            <h1 className="single-movie-page-title">
              {singleMovie.title}
            </h1>
            <p className="single-movie-page-overview">{singleMovie.overview}</p>
            <button className="show-companies-btn" type="button" onClick={(() => setProductionClicked(!productionClicked))}>Show production companies</button>
            <div className="single-movie-page-production-companies">
              {productionClicked && singleMovie.production_companies.map((company) => {
                return (
                  <div className={productionClicked ? 'company-img-container' : 'nodisplay'} key={company.id}>
                    {company.logo_path !== null
                      && <Link
                        key={company.id}
                        to={`/company/${company.id}`}><img className="company-img" src={`https://image.tmdb.org/t/p/w780${company.logo_path}`} alt={`${company.name}_image`} /> </Link>}
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default SingleMovie;