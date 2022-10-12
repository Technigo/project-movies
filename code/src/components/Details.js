import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Details = () => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const { pokemonName } = useParams();

  const onBackButtonClick = () => {
    navigate(-1);
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/550?api_key=22332a0afa34a5b14d4e80b45a24b1e8${pokemonName}`).then((res) => res.json()).then((data) => setDetails(data))
  }, [pokemonName])
  return (
    <div>
      <button type="button" onClick={onBackButtonClick}>Go back</button>
      <h2>{details.name}</h2>
      <img alt="img" src={details.sprites ? details.sprites.other['official-artwork'].front_default : ''} />
    </div>
  );
}

export default Details;