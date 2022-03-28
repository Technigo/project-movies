import React from 'react';

export const MovieCards = ({ movies }) => {
    return (
        <section className="movie-card">
                    <h3>{movies.title}</h3>
        </section> 
    )   
}


export default MovieCards;

// return (
//     <section className="movie-card">
//         {MovieCards.map(movieCard => ( 
//             <article key={movieCard.id}>
//                 <h3>{movieCard.title}</h3>
//             </article>
//         ))}
//     </section> 
// )   
// }
