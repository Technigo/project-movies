// const API_KEY = 'e99c6c8e9d657c50fc40ffe9db9d16f5';

export const URL_MOVIES = 'https://api.themoviedb.org/3/movie/popular?api_key=e99c6c8e9d657c50fc40ffe9db9d16f5&language=en-US&page=1';
// export const URL_DETAILS ='https://api.themoviedb.org/3/movie/{movie_id}?api_key={API_KEY}&language=en-US';

// export const SINGLE_MOVIES_URL = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=e99c6c8e9d657c50fc40ffe9db9d16f5&language=en-US`;






// import React from 'react';


// export const MovieCards = ({leias}) => {
//     return (
//         <section>
//             {leias.map((leia) => (
//                 <div key={leia.title}>
//                     <h3>{leia.title}</h3>
//                     <img className="movie-poster" src={`https://image.tmdb.org/t/p/w300${leia.poster_path}`} alt={leia.title}/>
//                 </div>
//             ))}
//         </section>      
//     )
// }