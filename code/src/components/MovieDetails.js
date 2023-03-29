import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const backButton = () => {
    navigate(-1);
  }

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=95ef8b2227f45566b4eecd3687c10466&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovieDetails(data));
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <p>loading...</p>
    )
  }

  return (
    <section className="detail-page">
      {movieDetails && (
        <div
          className="background"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`
          }}>
          <button type="button" onClick={backButton}>Back to movies</button>
          <div className="detail-wrapper">
            <div className="poster">
              <img alt={movieDetails} src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} />
            </div>
            <div className="detail-text">
              <h2 className="movie-title">{movieDetails.original_title}
                <span className="rating">⭐ {Math.round(movieDetails.vote_average * 10) / 10}/10</span>
              </h2>
              <p>{movieDetails.overview}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default MovieDetails;