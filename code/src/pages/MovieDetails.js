import React, { useEffect, useState } from 'react';
import { Route, Link, useParams, useHistory } from 'react-router-dom';
import { BackIcon } from '../components/BackIcon'
import './MovieDetails.css'


export const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState([])
  const history = useHistory();
  const [statusCode, setStatusCode] = useState(200);
  const DETAILS_API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=a87d34281c8e1e04c49c6b1cfecbf6f0&language=en-US`

  useEffect(() => {
    fetch(DETAILS_API)
      .then(res => {
        setStatusCode(res.status)
        return res.json()
      })
      .then(json => setMovie(json))
  }, [DETAILS_API, movieId])

  useEffect(() => {
    console.log(`Status code: ${statusCode}`);
    if (statusCode !== 200) {
      history.push("/");
    }
  }, [history, statusCode]);

  if (!movie) {
    return <></>;
  }

  return (
    <div key={movie.id}>
      <div className="background-img" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }} alt={movie.title}>
        <Route path="/movies">
          <Link to="/" className="back-link">
            <BackIcon />
            <h3>Movies</h3>
          </Link>
        </Route>
        <div className="movie-content">
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} className="movie-poster" />
          <div className="movie-text">
            <h1>{movie.title}</h1>
            <p>{movie.vote_average}/10</p>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}