import React, { useEffect, useState } from 'react';
import { Loader } from 'components/Loader';
import { useParams } from 'react-router-dom';
import { GoBackButton } from './GoBackButton';
import './Details.css';

export const Details = () => {
  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c78445f7216324dcfc408149681f2fcd&language=en-US`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setMovieData(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, []);

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <div className="details-page">
      <div
        className="detail-background-picture"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movieData.backdrop_path})` }}>
        <GoBackButton />
        <section className="details">

          <div className="detail-container">
            <section className="movie-data-section">

              {movieData.poster_path && <img className="movie-data-cover" src={`https://image.tmdb.org/t/p/w1280${movieData.poster_path}`} alt={`Movie poster for ${movieData.title}`} />}
              <div className="movie-data-container">

                <h1 className="movie-data-title"> {movieData.title}</h1>
                {movieData.vote_average && <span className="movie-data-rating">⭐{movieData.vote_average.toFixed(1)}</span>}
                <p className="movie-data-overview">
                  {movieData.overview}
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>

  )
}
