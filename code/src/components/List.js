import React from "react"

const List = ({pokemons}) => {
    return (
        <section>
            {pokemons.map((pokemon => {
             return   <div key={pokemon.name}>{pokemon.name}</div>
            }))}
        </section>
    )
}

export default List