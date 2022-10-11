import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Details = () => {
  const [details, setDetails] = useState({});
  const { pokemonName } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon{pokemonName}')
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
      })
  }, [pokemonName])

  return (
    <div>
      <button type="button" onClick={goBack}>Go back</button>
      <h2>{details.name}</h2>
      <img alt="img" src={details.sprites ? details.sprites.other['official-artwork'].front_default : ''} />
    </div>
  )
}