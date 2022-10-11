import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((data) => setListItem(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="pokemon-list">
      {listItem.map((pokemon) => {
        return <Link className="pokemons" key={pokemon.name} to={`/details/:${pokemon.name}`}>{pokemon.name}</Link>
      })}
    </div>
  )
}

export default List;