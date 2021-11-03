import React from 'react'
import { Link } from 'react-router-dom'

const List = ({pokemons}) => {
  return (
    <section>
      {pokemons.map((pokemon) => (
        <Link key={pokemon.name} to={`/details/${pokemon.name}`}>{pokemon.name} </Link>))
      }
    </section>
  )
}

export default List