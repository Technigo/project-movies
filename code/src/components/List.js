/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((singlePokemon) => {
        return (
          <p key={singlePokemon.name}>
            <Link to={`/details/${singlePokemon.name}`}>Go to {singlePokemon.name} details </Link>
            {/* the key below can probably be switched to the id of the movies instead - when using that api */}
          </p>
        )
      })}
    </>
  )
}

export default List;