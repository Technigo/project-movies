import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
  const [details, setDetails] = useState({})
  const Navigate = useNavigate()
  const { movieName } = useParams()
  const onBackButtonClick = () => {
    Navigate(-1)
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieName}?api_key=f8eb3d0941c8cec7118b188a305910c5&language=en-US&page=1`)
      .then((data) => data.json())
      .then((configuredData) => setDetails(configuredData.results))
  }, [movieName])
  return (
    <section className="details-container">
      {details.map((info) => {
        return (
          <>
            <button type="button" onClick={onBackButtonClick}>Go back</button>
            <img src={`https://image.tmdb.org/t/p/w342/${info.poster_path}`} alt="poster" />
            <div className="movie-info">
              <div className="title-and-rating">
                <h1>{info.title}</h1>
                <p>{info.vote_average}</p>
              </div>
              <p>{info.overview}</p>
            </div>
          </>
        )
      })}

    </section>
  )
}

export default Details