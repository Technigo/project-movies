import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();
  //   const params = useParams();
  const { pokemonName } = useParams();
  // this { pokemonName } above can be switched to the movie details

  useEffect(() => {
    // console.log('params', params);
    console.log('pokemonName', pokemonName);
  }, [pokemonName]);
  const onGoToNotFoundButtonClick = () => {
    navigate('/404');
  }
  return (
    <div>
      <h2> I am the Details component for the pokemon {pokemonName}</h2>
      <button type="button" onClick={onGoToNotFoundButtonClick}>Go to NotFound</button>
    </div>)
}

export default Details;