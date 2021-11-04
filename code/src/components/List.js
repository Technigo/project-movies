import React from 'react';
import { Link } from 'react-router-dom';

const List = ({movies}) => {
    return (
       <>
    <section className="full-page-container">
       {movies.map((movie) => (
      <Link
         to={`/details/${movie.id}`}
         key={movie.id} 
         className="details-movie-image" 
      >  
         <img className= "movie-list-image" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} 
         alt="{movie.title}" 
         className="movie-img"
         />
         <div className="moviedate">
         <h1>{movie.title}</h1>
         <p className="date-movie">
            Released:{movie.release_date} 
         </p>
         </div>
       </Link>
       ))}
    </section>
    </>
    );
};

export default List;
 


                  