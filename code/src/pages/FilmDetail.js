import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const FilmDetail = () => {
    const { id } = useParams();
    const api_key = "cf10fb16d5d29cc1bc7eb10f47f96663"
    const RG_API_MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`;

    const [MovieDetails, setMovieDetails] = useState(""); 

    useEffect(() => {
        fetch(RG_API_MOVIE_DETAILS)
            .then((data) => {
                return data.json()
            })
                .then((data) => {
                    setMovieDetails(data);
                })
                .catch((error) => {
                    console.error(error);
                    })
    }, []);

    console.log(MovieDetails);

    return (
        <article>
            <a href="/">
                Movie list
            </a>
            <div>
                <img src={`https://image.tmdb.org/t/p/w342${MovieDetails.poster_path}`} />
                <div>
                    <img src={`https://image.tmdb.org/t/p/w342${MovieDetails.backdrop_path}`} />
                    <div>
                        <h3>{MovieDetails.title}</h3>
                        <p>{MovieDetails.vote_average} / 10</p>
                        <p>{MovieDetails.overview}</p>
                    </div>
                </div>
            </div>            
        </article>
    );
};