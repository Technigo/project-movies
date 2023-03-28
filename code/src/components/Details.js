import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const { movieId } = useParams();

  const onBackButtonClick = () => {
    navigate(-1);
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c77f0f257b1db8c5cdfe593182e32f79&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setDetails(data.results))
      .catch((e) => {
        console.error(e)
      })
  }, [movieId])

  return (
    <div>
      <button type="button" onClick={onBackButtonClick}>Go back</button>
      <h2>{details.title}</h2>
      <p>{details.vote_average}</p>
      <p>{details.overview}</p>
      <p>{details.release_date}</p>
    </div>
  )
}

export default Details;