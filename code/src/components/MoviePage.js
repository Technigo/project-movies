import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

export const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    const DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=0cb608022c0a0fbef75881f68133d694e&language=en-US`;

 
    return (
        <section className="movie-page">
            <p>Hi</p>
        </section>
    )
};