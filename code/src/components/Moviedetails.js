/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Moviedetails = () => {
  const [movie, setMovie] = useState({})
  const navigate = useNavigate()
  const { movieId } = useParams()

  const homeButton = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b6486ef7752f2120246f9cab35f64ece&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
  }, [movieId])
  console.log(movie)

  return (
    <section
      className="details-page"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})` }}>
      <button type="button" onClick={homeButton}> Back to movie list! </button>
      <h2>{movie.title}</h2>
    </section>
  )
}

export default Moviedetails;