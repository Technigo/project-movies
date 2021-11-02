import React from 'react';
import { Link } from 'react-router-dom';

const List = ({movies}) => {
    return (
    <section>
       {movies.map((movie) => (
           <Link
           to={`/details/${movie.id}`}
           key={movie.id} 
        //    className="movie-card" 
        >
           <div key={movie.id}>
            <img className= "movielist" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="{movie.title}"/>
            </div>
            </Link>
       ))}
    
    </section>
    );
};

export default List;
 


                  