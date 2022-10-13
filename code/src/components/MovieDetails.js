import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const MovieDetails = ({ singleMovie }) => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const API_KEY = '79339436b04cca29ee82635056159807';

  const returnToDefaultPage = () => {
    navigate('/');
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error(error))
  }, []);

  return (
    <>
      <h1 className="movie-title">{details.title}</h1>
      <button type="button" onClick={returnToDefaultPage}>Return home</button>
    </>
  )
};

export default MovieDetails;