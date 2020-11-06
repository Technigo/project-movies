import React, { useEffect, useState } from 'react';
import 'styles/movielist.css';
import { MovieThumb } from 'components/MovieThumb';
import { Options } from 'components/Options';

export const MoviesByTheme = () => {
  const [thememovies, setThemeMovies] = useState([]);
  const [themeUrl, setThemeUrl] = useState();

    useEffect(() => {
    fetch(themeUrl)
    .then(res => res.json())
    .then(json => {
      setThemeMovies(json.results)
    })
  }, [themeUrl]);

  // Send the results array to MovieThumb component 
  // where we pick the objects we need
  return (
    <>
      <Options setThemeUrl={setThemeUrl}/>
      <section className="poster-container">
        {thememovies.map((movie) => (
          <MovieThumb key={movie.id} {...movie} />
        ))}
      </section>
    </>
  );
};