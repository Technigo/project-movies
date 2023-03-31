/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NotFound from 'components/NotFound'

/* PAGE 2 */
const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams()
  const onBackButtonClick = () => {
    navigate(-1);
  }

  const FetchDetails = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e865fc7d6c1eaa875454193ac1851471&language=en-US`)
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
  // eslint-disable-next-line no-unused-vars
  const handleBackButton = (event) => {
    if (event.KeyCode === 13) {
      onBackButtonClick();
    }
  };
  useEffect(() => {
    FetchDetails()
  })

  return (
    <section className="detail-page">
      <div
        className="background"
        style={{
          backgroundImage: `url(http://image.tmdb.org/t/p/original${details.backdrop_path})`
        }}>
        <div className="backbutton">
          <div type="button" className="button" onClick={onBackButtonClick}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="movie-details">
          <img src={`http://image.tmdb.org/t/p/w342${details.poster_path}`} alt={details.title} />
        </div>
        <div className="details-page-2">
          <h3>{details.title}</h3>
          <p>{details.overview}</p>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;

/* To round rating number to one decimal */
/* const roundedNumber = Math.round(movieDetails.vote_average * 10) / 10 */
