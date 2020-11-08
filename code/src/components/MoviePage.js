import React, { useEffect, useState} from 'react';
import {  useParams } from 'react-router-dom';

export const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0cb608022c0a0fbef75881f68133d694&language=en-US`)
        .then((res) => res.json())
        .then((json) => {
            setMovie(json)
        });
    }, []);

 
    return (
        <section>
        {movie.name}
        </section>
          );
        };
