// /////////////// IMPORT //////////////////////// //

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieInfoPage.css';

// /////////////// COMPONENT //////////////////////// //

// This function makes a fetch call and displays details about the chosen movie

export const MovieInfoPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    setLoading(true)
    console.log(loading)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5e0fb7ffc6ed1b5ff2d5d2db9f68e259&language=en-US`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [id]);

  // /////////////// RETURNS JXT //////////////////////// //

  return (
    <section
      className="details-container"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${details.backdrop_path})` }}>
      <div>
        <p className="details-title">{details.title}</p>
        <img className="poster-image" src={`https://image.tmdb.org/t/p/w300/${details.poster_path}`} alt="movie poster" />
        <p className="movie-info">{details.overview}</p>
        {/* <span>{details.vote_average.toFixed(1)}</span> */}
      </div>
    </section>
  );
}

