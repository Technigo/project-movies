import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ list }) => {
  return (
    <div>
      {list.map((pokemon) => {
        return (
          <Link key={pokemon.name} to={`/details/${pokemon.name}`}>{pokemon.name}</Link>
        );
      })}
    </div>
  );
}

export default List;