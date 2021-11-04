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
           <div className="movie-list" key={movie.id}>
          <img className= "movie-list-image" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="{movie.title}"/>
           </div>
            
            </Link>
       ))}
    
    </section>
    </>
    );
};

export default List;
 


                  