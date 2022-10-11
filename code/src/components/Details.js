import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Details = () => {
  const params = useParams(); // Version1
  const { pokemonName } = useParams(); // Version2; rekommenderat!
  const navigate = useNavigate();
  useEffect(() => {
    console.log(params.pokemonName);
    console.log(pokemonName);
  })

  const goBack = () => {
    navigate(-1);
  }
  return (
    <div>
      <p>DetailsPage</p>
      <button type="button" onClick={goBack}>Go back</button>
    </div>
  )
}

export default Details;