import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const onBackButtonClick = () => {
    navigate(-1);
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=95ef8b2227f45566b4eecd3687c10466&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id])

  return (
    <section className="detail-page">
      <button type="button" onClick={onBackButtonClick}>Go back</button>
      <h2>{movieDetails.original_title} </h2>
      <img alt={movieDetails} src={`https://image.tmdb.org/t/p/w300${movieDetails.backdrop_path}`} />
    </section>
  )
}

export default MovieDetails;