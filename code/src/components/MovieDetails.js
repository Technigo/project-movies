import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=37960b018b2292cd4182bc4096fb83c8&language=en-US`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
    console.log(details)
  }, [id]);

  /* const onGoToNotFoundButtonClick = () => {
        navigate('/404');
      } */

  return (
    <div>
      <h1>This is Sara&apos;s and Annika&apos;s MovieDetails-component!!!</h1>
      <p>{details.title}</p>
      <p>{details.release_date}</p>
      <p>{details.overview}</p>
      <p>{details.vote_average}</p>
      <div>
        <img src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt={details.title} />
      </div>
    </div>
  )
}

/* <p>{detail.title}</p>
            <p>{detail.overview}</p>
            <p>{detail.vote_average}</p>
            <img src={`https://image.tmdb.org/t/p/w300${detail.backdrop_path}`} alt={detail.title} /> */