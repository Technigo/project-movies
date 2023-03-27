/* eslint-disable react/self-closing-comp */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../css/Details.css';

const Details = () => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const onBackButtonClick = () => {
    navigate(-1);
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=22332a0afa34a5b14d4e80b45a24b1e8&language=en-US`).then((res) => res.json()).then((data) => setDetails(data))
  }, [id])
  return (
    <section className="detailPage">
      <button className="button" type="button" onClick={onBackButtonClick}>
        <span className="arrow" />
        Movies
      </button>
      <div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
        <div className="summary">
          <div>
            <img className="detailsPoster" alt="img" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} />
          </div>
          <div className="detailsBox">
            <h2><span className="title">{details.title}</span> <span className="rating"> {Math.round(details.vote_average * 10) / 10}</span></h2>
            <p>{details.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;