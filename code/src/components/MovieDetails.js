import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const onBackButtonClick = () => {
    navigate(-1);
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6cfbbdc6034efd81a5554b5cb5a11377&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovieDetails(data))
  }, [id])

  return (
    <div>
      <button type="button" onClick={onBackButtonClick}>Go back</button>
      <h2>{movieDetails}</h2>
      {/*  <img alt="img" src={details.sprites ? details.sprites.other['official-artwork']
     .front_default : ''} /> */}
    </div>
  );
}

export default MovieDetails;
