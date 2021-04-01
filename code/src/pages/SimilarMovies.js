import React, { useState, useEffect } from 'react'
import { API_SIMILAR } from '../reusable/urls'
import { useParams, Route, Link } from 'react-router-dom'

const SimilarMovies = () => {
  const [similar, setSimilar] = useState([])
  const [errorMessage, setErrorMessage] = useState()
  const params = useParams()

  useEffect(() => {
    fetch(API_SIMILAR(params.id))
      .then(response => response.json())
      .then(data => {
        if (data.success === false) {
        setErrorMessage(data.status_message)
      } else {
        setSimilar(data.titles)
      } 
    })
      .catch(err => setErrorMessage(true))
  }, [params])


  if (errorMessage) {
    return (
      <div className="error">
        <img src="../favicon/404-error.svg" alt="error icon" />
        <h3>{errorMessage}</h3>
        <Route path="/">
          <Link to={"/"}>
            <button className="error-btn">
              Back to homepage
            </button>
          </Link>
        </Route>
      </div>
    )
  } 

  return (
    <div className="other-movies-list">
      <h2 className="other-movies-title">Find the name of the movie in your languagues</h2>
      {similar.map((similars) => {
        const iso = require('iso-3166-1')
        return (
          <p key={similars.title}>{iso.whereAlpha2(similars.iso_3166_1).country} - {similars.title}</p>
      )})

      }
      <Link to={`/movie/${params.id}`}>
        <button className="error-btn">
          Back
        </button>
      </Link>
    </div>
  )
}

export default SimilarMovies