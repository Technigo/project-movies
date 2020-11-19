import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import ListedMovie from '../components/ListedMovie';
import { NoSimilarMoviesFound } from './NotFound';
import { RoundBackButton } from '../components/BackButton';

// API Urls
import { APIKEY } from '../components/ApiKeys';
import { POSTER_IMG_URL } from '../components/ApiUrls';

// Styling
import 'assets/MoviePage.css';

// ----------------------------------------------------------------------------------------

const SimilarMovies = () => {
  const params = useParams();
  const [similarMovies, setSimilarMovies] = useState([]);

  // Fetch details for selected movie
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=${APIKEY}&language=en-US&page=1`
    )
      .then((results) => results.json())
      .then((json) => {
        setSimilarMovies(json.results);
      });
  }, [params.id]);

  return (
    <>
      {/* <BackButton /> */}
      <div className="similar-movies--back-button">
        <RoundBackButton />
      </div>

      {/* If there are no similar movies, show this error */}
      {similarMovies.length === 0 && <NoSimilarMoviesFound />}

      {/* List of similar movies */}
      {similarMovies.map((movie) => {
        return (
          <ListedMovie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            posterImgSrc={`${POSTER_IMG_URL}${movie.poster_path}`}
          />
        );
      })}
    </>
  );
};

export default SimilarMovies;
