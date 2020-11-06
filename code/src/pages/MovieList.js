import React, { useState, useEffect } from 'react';

import Loader from '../components/Loader';
import Error from '../components/Error';
import MovieThumb from '../components/MovieThumb';
import { API_KEY } from '../api.js';

const MovieList = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const MOVIES_URL = `https://api.themoviedb.org/3/movie/${
    children ? children : 'now_playing'
  }?api_key=${API_KEY}&language=en-US&page=1`;

  // 	The React docs say that you can use props.children on
  //components that represent ‘generic boxes’ and that ‘don’t know their children ahead of time’.
  //For me, that didn’t really clear things up.
  //I’m sure for some, that definition makes perfect sense but it didn’t for me.
  // My simple explanation of what this.props.children does is that it is used
  //to display whatever you include between the opening and closing tags when invoking a component.
  useEffect(() => {
    fetch(MOVIES_URL)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error('404');
        }
      })
      .then(json => {
        console.log(json.results);
        setMovies(json.results);
        setLoading(false);
      })
      .catch(() => {
        window.location.assign('/error');
      });
  }, [MOVIES_URL]);

  // const getMovieList = () => {
  //   fetch(API_URL)
  //     .then(result => {
  //       if (result.ok) {
  //         return result.json();
  //       } else {
  //         throw new Error('404');
  //       }
  //     })
  //     .then(json => {
  //       console.log(json.results);
  //       setMovies(json.results);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       window.location.assign('/error');
  //     });
  // };

  return (
    <main className="list">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {movies.map(movie => (
            <MovieThumb key={movie.id} {...movie} />
          ))}
        </>
      )}
    </main>
  );
};

export default MovieList;
