import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const MovieDetails = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=37960b018b2292cd4182bc4096fb83c8&language=en-US`)
      .then((response) => response.json())
      .then((data) => setDetails(data.results))
    console.log(details)
  }, [movieId]);

  /* const onGoToNotFoundButtonClick = () => {
        navigate('/404');
      } */

  return (
    <>
      {details.map((detail) => {
        return (
          <div>
            <h1>Hej hej!!!</h1>
            <p>{detail.title}</p>
            <p>{detail.overview}</p>
            <p>{detail.vote_average}</p>
            <img src={`https://image.tmdb.org/t/p/w300${detail.backdrop_path}`} alt={detail.title} />
          </div>
        )
      })}
    </>
  )
}
