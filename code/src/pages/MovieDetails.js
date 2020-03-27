import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import 'pages/movieDetails.css';

export const MovieDetails = () => {
  const api_key = "67a5c607e91b1a60e64b4e131b88956b";
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setMovieDetails(json)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <h3>Loading...</h3>
    )
  }

  if (!movieDetails.title) {
    return (
      <div>
        <h3>Sorry, we can't find this movie</h3>
        <Link to="/" exact>
          <p>Back to Homepage</p>
        </Link>
      </div>
    )
  }

  return (
    <section className="movie-details">

      <div className="background-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})` }}>
        {/* <Link to="/" exact>
          <p className="back-homepage">Back to Movies</p>
        </Link> */}
        <div className="movie-summary">
          <img src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt={movieDetails.id}></img>
          <div className="description">
            <h2>{movieDetails.title}</h2>
            <h3>{movieDetails.vote_average} / 10</h3>
            <p className="movie-description">{movieDetails.overview}</p>
          </div>
        </div>
      </div>
    </section >
  )
}



