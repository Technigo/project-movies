import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const FilmDetail = () => {
    const { FilmId } = useParams();

    const [FilmDetails, setFilmDetails] = useState(""); 

    const fetchFilmId = () => {
        const api_key = "cf10fb16d5d29cc1bc7eb10f47f96663";
        const RG_API_FILM_DETAILS = `https://api.themoviedb.org/3/movie/${FilmId}?api_key=${api_key}&language=en-US`;

        fetch(RG_API_FILM_DETAILS)
            .then((data) => {
                return data.json()
            })
                .then((data) => {
                    setFilmDetails(data);
                })
                .catch((error) => {
                    console.error(error);
                    })
    };

    useEffect(() => {
        fetchFilmId();        
    }, [FilmId]);

    return (
        <article>
            <a href="/">
                Movie list
            </a>
            <div>
                <img src={`https://image.tmdb.org/t/p/w342${FilmDetails.poster_path}`} alt="{title} film poster" />
                <div>
                    <img src={`https://image.tmdb.org/t/p/w342${FilmDetails.backdrop_path}`} alt="{title} film poster"/>
                    <div>
                        <h3>{FilmDetails.title}</h3>
                        <p>{FilmDetails.vote_average} / 10</p>
                        <p>{FilmDetails.overview}</p>
                    </div>
                </div>
            </div>            
        </article>
    );
};