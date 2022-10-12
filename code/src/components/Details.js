import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

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
    <div className="background" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
      <h1>{details.title}</h1>
      <p>{details.overview}</p>
      <button type="button" onClick={onBackButtonClick}>Go back</button>
      <img alt="img" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} />
    </div>
  );
}

export default Details;