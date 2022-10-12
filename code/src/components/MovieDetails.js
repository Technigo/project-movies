import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState([])
  const { id } = useParams()
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}popular?api_key=2248800ec8114dc953ca7e0362a1332b&language=en-US&page=1/`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }, [id])

  return (
    <section className="details-page">
      <button type="button" onClick={goBack}> Go Back </button>
      <div className="movie-container">
        <img className="detail-image" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
        <div className="movie-description">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;

/* import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
//   const params = useParams();
  const { id } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2248800ec8114dc953ca7e0362a1332b&language=en-US`)
      .then((response) => response.json())
      .then((json) => {
        setMovie(json)
        console.log('fetch ID', movie)
      })
  }, [id]);

  const navigate = useNavigate();
  useEffect(() => {
    // console.log(id);
  });
  const goBack = () => {
    navigate(-1);
  }
  return (
    <div>
      <button type="button" onClick={goBack}> Go back </button>
      <h2>{movie.original_title}</h2>
      <p>khsjashajsh{movie.overview}</p>
      <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="POSTER" />
    </div>
  );
}

export default MovieDetails */

