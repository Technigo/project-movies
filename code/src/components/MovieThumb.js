import React from 'react';

export const MovieThumb = ({ title, poster }) => {
    
    return (
        <section className='movie-thumb'>
            {title}
            <div className='movie-thumb__wrapper'>
                <img className='movie-thumb__poster' src={poster} alt={title} />
                <p className='movie-thumb__description'> 4.5 </p>
            </div>
        </section>
    );
};