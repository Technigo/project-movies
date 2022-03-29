import React from 'react';

export const MovieCards = ({leias}) => {
    return (
    <section>
        {leias.map((leia) =>{
        return <div key={leia.title}>{leia.title}</div>
        })}
    </section>
    )
}


export default MovieCards;
