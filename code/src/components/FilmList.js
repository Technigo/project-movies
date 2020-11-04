import React, {useEffect, useState } from 'react';

import { FilmCard } from 'components/FilmCard';

import './FilmList.css'

export const FilmList = () => {

    const [FilmList, setFilmList] = useState([]); 

    const fetchFilms = () => {
        const api_key = "cf10fb16d5d29cc1bc7eb10f47f96663";
        const RG_API = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_cast=30614`;

        fetch(RG_API)
        .then((data) => {
            return data.json()
        })
            .then((data) => {
            setFilmList(data.results);
            })
                .catch((error) => {
                console.error(error);
                })
    };
  
    useEffect(() => {
        fetchFilms();        
    }, []);

    return (
        <section className="section-container">
            {FilmList.map((films) => (
            <FilmCard key={films.id} {...films} />
            ))}
        </section>
    );
};