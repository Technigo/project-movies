import React from 'react';

const List = ({movies}) => {
    return (
    <section>
       {movies.map((movie) => (
           <div key={movie.id}>
            <img className= "movielist" src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="{movie.title}"/>
            </div>
       ))}
    </section>
    );
};

export default List;



                  