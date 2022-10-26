
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetails = ({ API_KEY }) => {
  const { movieId } = useParams();
  console.log(movieId)
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  console.log(movie)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error(error))
  }, [API_KEY, movieId]);

  const goBack = () => {
    navigate(-1);
  }

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 70%, rgb(0,0,0.5) 100%), url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
        backgroundSize: 'cover',
        height: '100vh'
      }}>
      <div>
        <div className="details-container">
          <img
            className="details-poster"
            src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            alt="" />
          <div className="details-info">
            <div className="movie-text">
              <h1 className="movie-title">{movie.original_title}</h1>
              <h3 className="movie-tagline">{movie.tagline}</h3>
              <p className="movie-overview">{movie.overview}</p>
              <div className="viewer-score">{movie.vote_average}/10</div>
            </div>
            <button className="go-back-btn" type="button" onClick={goBack}>Go back</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieDetails