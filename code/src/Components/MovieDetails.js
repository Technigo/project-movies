import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NotFound from 'Components/NotFound'

export const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams()

  const onBackButtonClick = () => {
    navigate(-1);
  }

  const FetchDetails = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e865fc7d6c1eaa875454193ac1851471&language=en-US`)
    console.log('hej?')
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => {
        console.log(error)
        if (error) {
          return (<NotFound />
          )
        }
      })
  }

  useEffect(() => {
    FetchDetails()
  })

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/original${details.backdrop_path})`
      }}>
      <button type="button" onClick={onBackButtonClick}>
                Back
      </button>
      <div className="movie-details">
        <img src={`http://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title} />
        <div className="details">
          <h1>{details.title}</h1>
          <p>{details.overview}</p>
        </div>
      </div>
    </div>
  );
}

/* export default MovieDetails; */

/* To round rating number to one decimal */
/* const roundedNumber = Math.round(movieDetails.vote_average * 10) / 10 */
