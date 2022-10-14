import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
/* import { MovieList } from './MovieList'; */

export const Details = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=012b5e0d6a17064c1b4e1d5d9021d5ae&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
      })
  }, [id])

  console.log(details)

  return (

    <div className="detailPage" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
      <div className="detailBox">
        <button className="backButton" type="button" onClick={goBack}><span className="arrow" /> Go back</button>
        <img className="detailPoster" src={`http://image.tmdb.org/t/p/w342/${details.poster_path}`} alt="poster" />
        <h1 className="detailTitle">{details.title}</h1>
        <p className="detailScore">⭐ {Math.round(details.vote_average * 10) / 10}</p>
        <p className="detailOverview">{details.overview}</p>

      </div>
    </div>
  /*
    <article className="detailPage">
      {details && (
        <div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
          <div className="summary">
            <div>
              <button className="backButton" type="button" onClick={goBack}>
              <span className="arrow" />Go back</button>
              <h2>{details.title}</h2>
              <p>{details.release_date}</p>
              <img src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt="poster" />
              <div className="details">
                <h1><span className="title">{MovieList.title}</span> {
                  <span className="rating">⭐{Math.round(details.vote_average * 10) / 10}</span></h1>
                  }
                <p>{details.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
*/
  )
}