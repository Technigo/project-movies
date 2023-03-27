import React, { useEffect, useState } from 'react';
import './Details.css';

export const Details = ({ movieId, apiKey }) => {
  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setMovieData(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <h1 className="loading">Loading data...</h1>
    )
  }
  return (
    <div className="detail-container">
      <div className="detail-background-picture" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieData.backdrop_path}` }} />
      <section className="movie-data-section">
        <h1>
          {movieData.title}
          <img className="detail-cover-picture" src={`https://image.tmdb.org/t/p/w1280${movieData.backdrop_path}`} alt="Yo" />
        </h1>
      </section>
    </div>

  )
}