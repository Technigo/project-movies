import React from 'react';

import { useParams } from 'react-router-dom';

export const MovieDetails = () => {

    //Using useParams hook to get the id for the path to each movie
    const { id } = useParams(); 
    
    return (
        <section className='movie-details'>
            {id}
        </section>
    );
};