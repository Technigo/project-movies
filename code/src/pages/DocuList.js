import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './movielist.css'
import { MovieCardDetails } from 'components/MovieCardDetails'
import { LeftArrow } from 'components/LeftArrow'



export const DocuList = () => {
  const [documentaries, setDocumentaries] = useState([])
  const apiKey = '85c8192ada23df0631c9cf9ca0b5729d'
  const urlDocu = `https://api.themoviedb.org/4/list/137392?page=1&api_key=${apiKey}`

  useEffect(() => {
    fetch(urlDocu)
      .then((res) => res.json())
      .then((json) => {
        setDocumentaries(json.results)
      })
  })

  return (
    <>
      <Link to="/" className="back-link">
        <LeftArrow />
        <span className="back-link-text">Movies</span>
      </Link>
      <div className="movie-container">
        {documentaries.map((docu) => (
          <Link to={`/movies/${docu.id}`} key={docu.id}>
            <article className="movie-card">
              <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${docu.poster_path}`} alt={docu.title} />
              <MovieCardDetails
                title={docu.title}
                release_date={docu.release_date} />
            </article>
          </Link>
        ))}
      </div>
    </>
  )
}