import React from 'react';
import { api_key } from '/.api_key' 

export const api_key = de0e6f6f34bb3f7060237da93b37b9e0;

export const URL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;


export const getPosterImage = ()  => {
    return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
}

export const getBackdropImage = ()  => {
    return `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`;
}


