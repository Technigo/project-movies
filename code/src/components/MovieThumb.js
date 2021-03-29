import React from 'react';

const MovieThumb = ({title, release_date, poster_path}) => {
  
    return (
        <section>
            <img src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} alt={title}  />
            <p>{title}</p>
            <p>Released:{release_date}</p>
        </section>

    )
}
export default MovieThumb;