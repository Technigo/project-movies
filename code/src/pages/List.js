import React from 'react';
import { Link } from 'react-router-dom';

export const List = ({ pokemons }) => {
  return (
    <section className="list">
      {pokemons.map((pokemon) => {
        return (
          <Link
            key={pokemon.name}
            to={`/details/${pokemon.name}`}
            className="list-element">{pokemon.name}
          </Link>
        )
      })}
    </section>
  )
};